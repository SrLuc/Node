const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:BFSd946EW4vsr5gt@cluster0.h2phtig.mongodb.net/database?retryWrites=true&w=majority"
    );
    console.log("Banco de dados conectado com sucesso!");
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados: " + err);
  }
};

module.exports = dbConnection;
