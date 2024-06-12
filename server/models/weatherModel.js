import mongoose from 'mongoose';

const weatherSchema = mongoose.Schema;

const historialWeather = new weatherSchema(
    {
        city: { type: String, required: true },
        country: { type: String, required: true },
        temperature: { type: Number, required: true },
        condition: { type: String, required: true }, // Cambiado a String
        conditionText: { type: String, required: true }, // Corregido el nombre del campo
        icon: { type: String, required: true },
        date: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const weatherModel = mongoose.model("searches", historialWeather);

export default weatherModel;