import { Button, Grid, Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Box } from '@mui/material';
import React, {ChangeEvent, useState} from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';



function Login (){

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario: '',
            senha: '',
            token: ''
        })

        function updateModel(e:ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

        async function onSubmit(e:ChangeEvent<HTMLFormElement>){
            e.preventDefault();

            console.log('userLogin:' + userLogin);
        }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth/>
                        <TextField value={userLogin.senha}  onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='passaword' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                            <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>
                                Cadastre-se
                            </Typography>
                            </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    );
}

export default Login