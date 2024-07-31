// vamos a crear una función que se va a encargar de la conexión con la base de datos
require("dotenv").config();

const mongoose = require ("mongoose");
const dbCon = async () => {
    try {
        await mongoose.connect (`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@${process.env.CLUSTER}.cdunu6b.mongodb.net/${process.env.DB}?retryWrites=true&w=majority&appName=Prueba`),
        console.log("Conectado a la base de datos de MongoDB Atlas");
    } catch (err) {
        console.log("Error al conectar a la base de datos", err);
        process.exit(1);
    }
};

module.exports= dbCon; 