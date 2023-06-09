import React from "react";
import './Home.css';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/system";

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">
                <Grid alignItems="center" item xs={6}>
                    <Box padding={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" className="titulo">
                            Seja bem vindo!!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                            Expresse suas opniões sobre a empresa aqui!
                        </Typography>
                        <Button variant="outlined" className="botao">
                            Ver cotações
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                     <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px"/>
                </Grid>
                <Grid xs={12} className='postagens'></Grid>
            </Grid>
        </>
    );
}

export default Home;