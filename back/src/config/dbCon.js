// vamos a crear una función que se va a encargar de la conexión con la base de datos
const mongoose = require ("mongoose");
const dbCon = async () => {
    await mongoose.connect ("mongodb+srv://tamarasfok:7RqGXy26dcOSgeYN@prueba.cdunu6b.mongodb.net/Movies?retryWrites=true&w=majority&appName=Prueba")
};

module.exports= dbCon; 