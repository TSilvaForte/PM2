const app = require ("./src/server");
const dbCon = require ("./src/config/dbCon");

dbCon()
    .then ( () => {
        app.listen(3001, () => {
            console.log("Servidor escuchando en el puerto 3001");
        })
    })
    .catch((err) => {
        console.error (err)
    })

