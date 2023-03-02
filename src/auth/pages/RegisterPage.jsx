import {  Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { minHeight } from "@mui/system";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear Cuenta'>
       <form>
          <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="nombre de usuario"
                type="text"
                placeholder="xiragon"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="nombre completo"
                type="text"
                placeholder="Luis fereira"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="repite tu contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} >
                <Button variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>

            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color= 'inherit' to='/auth/login'>
              ingresar
              </Link>

            </Grid>

          </Grid>
        </form>
    </AuthLayout>
       
  );
};

