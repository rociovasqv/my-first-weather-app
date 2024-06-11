
import { router } from 'express';
import weatherModel from '../models/weatherModel';

//CREATE - POST - Crear y guardar búsqueda de historial

router.post("/", async (req,res) => {
    const { city } = req.body;
    try {
        let newSearch = await weatherModel.create(city);
        res.status(200);
        res.send(newSearch);
    }
    catch(error){
        res.status(500).json({
            message: error.message
          });
    }
});

// READ - GET - Obtener historial

//Get all last historials
router.get("/",async (req,res) =>{
    try{
        const historial = await weatherModel.find().sort()
        res.send(historial);
    }
    catch(error){
        res.status(400).json({
            message: error.message
          });
    }
   
});

export default {router};

    //Get only one historial
// router.get("/:id",async (req,res) =>{
//     const id = req.params.id;
//     const resp = await ModelUser.findById(id)
//     res.send(resp);
// })
