import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import './CadastroUsuario.css';
import { Box } from '@mui/material'
import { Link, useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
    let navigate = useNavigate()

    const [user, setUser] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [userResult, setUserResult] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: ''
    })

    const [confirmarSenha, setConfirmarSenha] = useState<String>('')

    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(event.target.value)
    }

    function updateModel(event: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    async function onSumit(event: ChangeEvent<HTMLFormElement>) {
        event.preventDefault()
        try {
            if (user.senha === confirmarSenha) {
                await cadastro('/usuarios/cadastrar', user, setUserResult);
                toast.success('Usuario cadastrado com sucesso', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            } else {
                toast.warning('As senhas não conferem', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }
        } catch (error) {
            toast.error('Falha no cadastro, por favor, verifique os campos', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            })
        }
    }

    useEffect(() => {
        if (userResult.id !== 0) {
            navigate('/login')
        }
    }, [userResult])
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSumit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='passaword' />
                        <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} id='confirmarSenha' label='confirmarSenha' variant='outlined' name='confirmarSenha' margin='normal' type='passaword' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button variant='contained' color='primary' type="submit">
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>)
}

export default CadastroUsuario;