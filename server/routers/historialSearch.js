
import  express  from 'express';
import weatherModel from '../models/weatherModel.js';

const router = express.Router()

//CREATE - POST - Crear y guardar búsqueda de historial

router.post("/agregar", async (req,res) => {
    const { city, country, temperature, condition, conditionText, icon } = req.body;
    console.log(req.body)
    try {
        let newSearch = await weatherModel.create({
            city,
            country,
            temperature,
            condition,
            conditionText,
            icon
        });
        res.status(200).send(newSearch);
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

export default router;

    //Get only one historial
// router.get("/:id",async (req,res) =>{
//     const id = req.params.id;
//     const resp = await ModelUser.findById(id)
//     res.send(resp);
// })
