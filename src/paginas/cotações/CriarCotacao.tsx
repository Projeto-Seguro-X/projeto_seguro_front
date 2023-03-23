import { Container , Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import http from '../servicos/http.js'

function CriarCotacao(){
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [coberturas, setCoberturas] = useState([])
    const [contador, setContador] = useState([])
    const [minMaxVigencia, setMinMaxVigencia] = useState({})
    const [temCpf, setTemCpf] = useState(false)
    const [permiteEnvio, setPermiteEnvio] = useState(false)

    const [cotacao, setCotacao] = useState({
        n_cotacao: undefined,
        nome: '',
        cpf: '',
        inicioVigencia: '',
        valorRisco: '',
        cobertura: '',
        nomeCobertura:'',
    })

    useEffect(()=>{
        const getCoberturas = async()=>{
            try {
                const {data} = await http.get('coberturas')
                setCoberturas(data);
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        };

        getCoberturas()
    },[])

    useEffect(() =>{
        function dataVigencia(){
            var dataNova = new Date;
            var nextDay = new Date(novaData);

            nextDay.setDate(novaData.getDate() + 1);

            const date = nextDay.getDate()
            const month = nextDay.getMonth()
            const year = nextDay.getFullYear()

            return`${date}/${month}/${year}`
        }

        const getNumCotacao =async() => {
            try {
                const {data} = await http.get('contadores')
                setContador(data[0].n_cotacao);

                setCotacao({
                    ...cotacao,
                    n_cotacao: data[0].n_cotacao
                    inicioVigencia: dataVigencia(),
                })
            } catch (error) {
                
            }
        }
    })
}