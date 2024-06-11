import express from "express";
import mongoose from "mongoose";
import { router } from "express";
import { dbconnect } from "./configs/database";


const server = express();

server.use(express.json());

server.listen(5001, () => {
    console.log("Server en vivo por el puerto: ", 5001);
  });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Conexión establecida a la base de datos MongoDB correctamente");
});

server.use(router);

dbconnect();

export default server;

