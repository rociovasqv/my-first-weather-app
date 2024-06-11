import { useState } from "react";

const API = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=es&q=`;
// const VITE_API_KEY = "0624b93ab1284263811134027241006";

const HooksWeather = () =>
    {
        const [city, setCity] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState({ error: false, message: "" });
        const [weather, setWeather] = useState({
            city: "",
            country: "",
            temperature: "",
            condition: "",
            conditionText: "",
            icon: ""
        });
        
        const Submitweather = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError({ error: false, message: "" });
        
        try {
          if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };

          const response = await fetch(API + city);
          const data = await response.json();
    
          if (data.error) {
            throw {message: "No se enecuentra la ciudad"};
          }
            
          const dataWeather = {
            city: data.location.name,
            country: data.location.country,
            temperature: data.current.temp_c,
            condition: data.current.condition.code,
            conditionText: data.current.condition.text,
            icon: data.current.condition.icon
        };
          setWeather(dataWeather);
          //                                          await saveSearchWeather(dataWeather);
        }
        catch(error){
          setError({ error: true, message: error.message });
            }
            finally{
              setLoading(false);
            }
      };
  return { city, setCity, loading, error, weather, Submitweather }
    };

    export default HooksWeather;

