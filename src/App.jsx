import { LoadingButton } from "@mui/lab";
import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ReadWeather from "./components/readWeather";

export default function App() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ error: false, message: "" });
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: "",
    condition: "",
    conditionText: "",
    icon: "",
  });

  const API = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}`;

  const onsubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ error: false, message: "" });
    try {
      if (!city.trim()) throw { message: "El campo ciudad es obligatorio" };
      const response = await fetch(API);
      const data = await response.json();

      if (data.error) 
        throw {message: "No se enecuentra la ciudad"};
      const dataWeather = {
        city: data.location.name,
        country: data.location.country,
        temperature: data.current.temp_c,
        condition: data.current.condition.code,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,};
      setWeather(dataWeather);
      // await saveSearchWeather(dataWeather);
    }
    catch(error){
      setError({error: true, message: error.message,});
        }
        finally{
          setLoading(false);
        }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        My weather app
      </Typography>

      <Box
        sx={{ display: "grid", gap: 2 }}
        component="form"
        autoComplete="off"
        onSubmit={onsubmit}
      >
        <TextField
          id="city"
          label="Ciudad"
          variant="outlined"
          size="small"
          required
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          error={error.error}
          helperText={error.message}
        />

        <LoadingButton
          type="submit"
          variant="contained"
          loading={loading}
          loadingIndicator="Cargando..."
          style={{ marginTop: 10 }}
        >
          Buscar
        </LoadingButton>
      </Box>
      {weather.city && <ReadWeather weather={weather} />}
    </Container>
  );
}
