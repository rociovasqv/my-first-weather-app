import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types"; 
function ReadWeather({ weather }) {
  return (
    <Box
      sx={{
        mt: 2,
        display: "grid",
        gap: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h2">
        {weather.city}, {weather.country}
      </Typography>

      <Box
        component="img"
        alt={weather.conditionText}
        src={weather.icon}
        sx={{ margin: "0 auto" }}
      />
      <Typography variant="h5" component="h3">
        {weather.temperature} °C
      </Typography>
      <Typography variant="h6" component="h4">
        {weather.conditionText}
      </Typography>
    </Box>
  );
}

ReadWeather.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    conditionText: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
  }).isRequired,
};

export default ReadWeather;
