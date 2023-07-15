const path = require("path");

//mostra nome do arquivo
console.log(path.basename(__filename));

//mostra nome do diretorio
console.log(path.dirname(__filename));

//mostra extensao do arquivo
console.log(path.extname(__filename));

//mostra arquivo como objeto
console.log(path.parse(__filename));

//cria caminho entra diretorios e arquivos
console.log(path.join(__dirname, "/novocaminho", "/teste.html"));
