import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return (
        <>
        <AppBar position="static">
        <Toolbar variant="dense">
          <Box className='cursor'>
            <Typography variant="h5" color="inherit">
              Projeto Seguro X
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start" className='navbarLink'>
            <Box mx={1} className='cursor'>
              <Link to='/home'>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
              </Link>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} className='cursor'>
              <Link to='/login' className="text-decorator-none">
                <Typography variant="h6" color="inherit">
                  logout
                </Typography>
              
              </Link>
             
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Navbar;