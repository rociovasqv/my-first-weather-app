
import { Container, Typography, CssBaseline } from '@mui/material';

import HooksWeather from "./hooks/useStateWeather";
import ReadWeather from "./components/readWeather";
import FormWeather from "./components/formWeather";
import Footer from "./components/footer";

function App() {
  const { city, setCity, loading, error, weather, Submitweather } = HooksWeather();
  
  return(
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <CssBaseline/>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Mi app de clima
      </Typography>
      
      <FormWeather
      city={city}
      setCity={setCity}
      loading={loading}
      error={error}
      Submitweather={Submitweather}
      />
      {weather.city && <ReadWeather weather={weather} />}
      <Footer />
    </Container>
  )  
}

export default App;