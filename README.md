# Dashboard – A operação em uma tela

Dashboard em HTML puro + uma função serverless (`api/dados.js`) que lê o Google Sheets.
Sem build, sem dependências.

## Estrutura

```
index.html        -> o dashboard
api/dados.js      -> lê as 4 abas da planilha e devolve JSON
api/_demo.js      -> dados de exemplo (usados quando SHEET_ID não existe)
package.json
```

## Planilha (Google Sheets)

Abas e colunas (os nomes das abas e dos cabeçalhos precisam ser exatamente estes):

| Aba | Colunas |
|---|---|
| Setores | setor, status, percentual, inicio, termino |
| Efetivo | setor, agentes, varredores |
| Veiculos | setor, tipo, placa |
| Equipes_Livres | equipe, observacao |

- `status`: Não iniciado, Em andamento ou Concluído
- `percentual`: número de 0 a 100 (sem o símbolo %)
- `termino`: horário no formato HH:MM

## Como publicar

1. Suba o arquivo `modelo-planilha-operacao.xlsx` no Google Drive e abra com Google Sheets (Arquivo > Salvar como Planilha Google).
2. Compartilhe: "Qualquer pessoa com o link" como **Leitor** (necessário para o teste; veja a observação sobre privacidade abaixo).
3. Copie o ID da planilha (trecho entre `/d/` e `/edit` na URL).
4. Crie um repositório no GitHub e envie estes arquivos.
5. Na Vercel: Add New > Project > importe o repositório > Deploy. Sem framework, sem build.
6. Para ligar à planilha: Settings > Environment Variables > `SHEET_ID` = o ID copiado > Redeploy.

Sem `SHEET_ID`, o dashboard abre em modo demo, com dados de exemplo.

## Privacidade

Para o teste, a planilha precisa estar legível por link. Para uso real com dados de pessoas,
o próximo passo é trocar para uma conta de serviço do Google (leitura privada) e adicionar login ao dashboard.
