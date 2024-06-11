import { Box, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PropTypes from "prop-types";

function FormWeather ({ city, setCity, loading, error, Submitweather }){

    const onsubmit = async (e) => {
        e.preventDefault();
        setCity(""); // Primero restablece el valor de city
        Submitweather(e); // Luego, envía la solicitud de búsqueda de clima
      };
    
      return (
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
      );
    }

    FormWeather.propTypes = {
        city: PropTypes.string.isRequired, 
        setCity: PropTypes.func.isRequired, 
        loading: PropTypes.bool.isRequired, 
        error: PropTypes.shape({ 
          error: PropTypes.bool.isRequired, 
          message: PropTypes.string.isRequired, 
        }).isRequired,
        Submitweather: PropTypes.func.isRequired,
      };


export default FormWeather;