import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box>
      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Powered by:{" "}
        <a href="https://www.weatherapi.com/" title="Weather API">
          WeatherAPI.com
        </a>
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2, fontSize: "10px" }}>
        Rocío Vasquez Vargas - Comisión 4 - Programación III - TUP - UTN - FRT
        2024
      </Typography>
    </Box>
  );
};

export default Footer;
