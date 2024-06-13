import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import  router  from "./routers/historialSearch.js"
import dbconnect from "./database.js"; // La ruta debe ser relativa al archivo server.js

const app = express();
const PORT = 5931;

app.use(cors());
app.use(express.json());

//Conectar al MongoDB y luego al servidor
dbconnect();

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Conexión establecida a la base de datos MongoDB correctamente");
});

app.listen(PORT, () => {
    console.log("App en vivo por el puerto: ", PORT);
});

app.use(router);


export default app;