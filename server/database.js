import mongoose from 'mongoose';

const mongoURI = "mongodb://127.0.0.1:27017/weatherHistorial";

const dbconnect = async () =>{
    try{
        mongoose.set('strictQuery', true);
        
        await mongoose.connect(mongoURI,{});
        console.log("Conexión correcta");
    }
    catch(err){
        console.log("Error de conexión");
    }
}

export default dbconnect;


