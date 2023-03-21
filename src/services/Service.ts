import axios from "axios";


export const api = axios.create({
    baseURL: '' /*VER ISSO AQUI PQ NÃO SEI PQ O DOCKER NÃO GOSTA DE MIM*/
})

export const  login = async(url:any, dados:any, setDado:any) =>{
    const resposta  = await api.post(url, dados)
    setDado(resposta.data.token)
}

export const  cadastroUsuario = async(url:any, dados:any, setDado:any) =>{
    const resposta  = await api.post(url, dados)
    setDado(resposta.data)
}