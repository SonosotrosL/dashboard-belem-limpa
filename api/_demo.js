// Dados de exemplo (fictícios) usados quando a variável SHEET_ID não está configurada.
module.exports = {
  setores: [
    { setor: "Batista Campos", status: "Concluído", percentual: "100", inicio: "06:00", termino: "10:15" },
    { setor: "Nazaré", status: "Concluído", percentual: "100", inicio: "06:00", termino: "11:40" },
    { setor: "Umarizal", status: "Em andamento", percentual: "72", inicio: "06:10", termino: "" },
    { setor: "Reduto", status: "Em andamento", percentual: "45", inicio: "06:30", termino: "" },
    { setor: "Cidade Velha", status: "Em andamento", percentual: "20", inicio: "07:00", termino: "" },
    { setor: "Pedreira", status: "Não iniciado", percentual: "0", inicio: "", termino: "" },
    { setor: "Guamá", status: "Não iniciado", percentual: "0", inicio: "", termino: "" },
    { setor: "Marco", status: "Não iniciado", percentual: "0", inicio: "", termino: "" },
  ],
  efetivo: [
    { setor: "Batista Campos", agentes: "4", varredores: "12" },
    { setor: "Nazaré", agentes: "5", varredores: "14" },
    { setor: "Umarizal", agentes: "4", varredores: "10" },
    { setor: "Reduto", agentes: "3", varredores: "9" },
    { setor: "Cidade Velha", agentes: "3", varredores: "8" },
  ],
  veiculos: [
    { setor: "Batista Campos", tipo: "Caminhão compactador", placa: "ABC-1D23" },
    { setor: "Nazaré", tipo: "Caminhão compactador", placa: "DEF-4G56" },
    { setor: "Umarizal", tipo: "Caminhão baú", placa: "GHI-7J89" },
    { setor: "Reduto", tipo: "Caminhonete", placa: "JKL-0M12" },
    { setor: "Cidade Velha", tipo: "Caminhão compactador", placa: "MNO-3P45" },
  ],
  livres: [
    { equipe: "Equipe de apoio 01", observacao: "Disponível no pátio" },
    { equipe: "Equipe de apoio 02", observacao: "Retornando do setor Nazaré" },
  ],
};
