import mongoose from 'mongoose'

const weatherShema = mongoose.Schema;

const historialWeather = new weatherShema(
    {
        city: { type: String, required: true },
        country: { type: String, required: true },
        temperature: { type: Number, required: true },
        condition: { type: Number, required: true },
        condictionText: { type: String, required: true },
        icon: { type: String, required: true },
        date: { type: Date, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false,
    },
)

const weatherModel = mongoose.model ("searches", historialWeather);

export default weatherModel;