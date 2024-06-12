import express from "express";
import mongoose from "mongoose";
import  router  from "express";
import dbconnect from "./database.js"; // La ruta debe ser relativa al archivo server.js

const app = express();
const PORT = 5931;
app.use(express.json());

app.listen(PORT, () => {
    console.log("App en vivo por el puerto: ", PORT);
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Conexión establecida a la base de datos MongoDB correctamente");
});

app.use(router);

dbconnect();

export default app;