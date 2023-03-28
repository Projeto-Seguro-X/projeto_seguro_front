import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import http from "../../services/Service";
import BuscaCobertura from '../buscaCobertura/BuscaCobertura'

function ItemApolice(props) {
    const [coberturas, setCoberturas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCoberturas = async () => {
            try {
                const { data } = await http.get('coberturas')
                setCoberturas(data);
                setLoading(false);

            } catch (error) {
                console.error(error)
            }
        };

        getCoberturas()
    }, [])

    function calculoValorParcela() {
        const valor = props.info.valorPago / props.info.qtParcelas
        return valor.toFixed(2)
    }

    const dataFormat = (data: string | number | Date) => {
        let dataObjeto = new Date(data);
        return `${dataObjeto.getDate()}/${dataObjeto.getMonth() + 1}/${dataObjeto.getFullYear()}`
    }

    if (loading) {
        return (
            <Container maxWidth='lg'>
                <>
                    <Typography component='h1' variant="h5" textAlign='center'>
                        Carregando..
                    </Typography>
                </>
            </Container>
        )
    }

    return (
        <Paper className="item-cotacoes">
            <div className="campo-cotacao">
                <p>Número da Cotação:</p>
                <p className="valor-cotacao">
                    {props.info.n_apolice}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Nome</p>
                <p className="valor-cotacao">
                    {props.info.nome}</p>
            </div>
            <div className="campo-cotacao">
                <p>CPF</p>
                <p className="valor-cotacao">
                    {props.info.cpf}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Ínicio da vigência do seguro:</p>
                <p className="valor-cotacao">
                    {dataFormat(props.info.inicioVigencia)}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Término da vigência do seguro:</p>
                <p className="valor-cotacao">
                    {dataFormat.(props.info.terminiVigencia)}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Valor do risco:</p>
                <p className="valor-cotacao">
                    R$ {props.info.valorRisco}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Valor a ser pago:</p>
                <p className="campo-cotacao">
                    R$ {props.info.valorPago}
                </p>
            </div>
            <div className="campo-cotacao">
                <p>Forma de pagamento:</p>
                {props.info.qtParcelas === 0 ?
                    <p className="valorCotacao"> À vista </p> :
                    <p className="valorCotacao">
                        {props.info.qtParcelas} parcelas de R${calculoValorParcela()} 
                    </p>
                }
            </div>
            <BuscaCobertura info={props.info.cobertura}/>
        </Paper>
    )
};

export default ItemApolice;
