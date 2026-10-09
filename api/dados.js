// Função serverless da Vercel: lê as abas do Google Sheets e devolve JSON.
// Sem SHEET_ID configurado, devolve dados de exemplo (modo demo).
const demo = require("./_demo");

const ABAS = {
  setores: "Setores",
  efetivo: "Efetivo",
  veiculos: "Veiculos",
  livres: "Equipes_Livres",
};

function parseCSV(text) {
  const rows = [];
  let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); rows.push(row); row = []; cell = "";
    } else cell += c;
  }
  if (cell !== "" || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

async function lerAba(id, nome) {
  const url = `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(nome)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Aba "${nome}": HTTP ${r.status}. A planilha está compartilhada como "Qualquer pessoa com o link: Leitor"?`);
  const [head, ...body] = parseCSV(await r.text());
  if (!head) return [];
  const chaves = head.map((h) => h.trim().toLowerCase());
  return body
    .filter((l) => l.some((c) => c.trim() !== ""))
    .map((l) => Object.fromEntries(chaves.map((k, i) => [k, (l[i] || "").trim()])));
}

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate=20");
  const id = process.env.SHEET_ID;
  try {
    if (!id) {
      return res.status(200).json({ modo: "demo", atualizado: new Date().toISOString(), ...demo });
    }
    const [setores, efetivo, veiculos, livres] = await Promise.all(
      Object.values(ABAS).map((nome) => lerAba(id, nome))
    );
    res.status(200).json({ modo: "planilha", atualizado: new Date().toISOString(), setores, efetivo, veiculos, livres });
  } catch (e) {
    res.status(500).json({ erro: e.message });
  }
};
