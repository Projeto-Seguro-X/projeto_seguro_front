import React, { useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import http from '../servicos/http.js'
import ItemApolice from "../componentes/ItemApolice";

function Cotacoes(){
    const[apolices, setApolices] = useState([])
    const[loading, setLoading] = useState(true)
    const[semApolice, setSemApolice] = useState(true)

    const GetData = () =>{
        try {
            const {data} = await.http.get('apolices/')
            setApolices(data);
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    getApolices()
}

useEffect(() =>{
    getData()
}, [])

const itemCotacao = apolices.map(item) => <ItemApolice{item.n_apolice} info={item}/>).reverse()

if(loading){
    return(
        <Container>
            <Paper>
                <Typography component='h1' variant='h5' textAlign='center'>
                    Carregando...
                </Typography>
            </Paper>
        </Container>
    );
}

return(
    <Container maxWidth="lg">
        <Paper>
            <Typography component='h1' variant='h5' textAlign='center'>
                Lista de Apolices
            </Typography>
            <div>
                <div>
                    {itemCotacao}
                    {itemCotacao.length === 0 && <p>Você ainda não tem apólices!</p>}
                </div>
            </div>
        </Paper>
    </Container>
);

export default Cotacoes;

