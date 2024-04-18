import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import moment from 'moment'
import Lottie from "lottie-react";
import foguete from "./assets/animacao.json";

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState(new Date().toISOString().split('T')[0])
  const [carregando, setCarregando] = useState(true)

  const buscarDadosApi = async () => {
    setCarregando(true)
    const hoje = new Date()
    const ano = hoje.getFullYear();
    //            3              4        "4"         "04"
    const mes = (hoje.getMonth() + 1).toString().padStart(2, '0');
    // janeiro = 0
    // fevereiro = 1
    // ---
    // dezembro = 11
    const dia = hoje.getDate().toString().padStart(2, '0');
    //                  2024    "04"   "17" 
    const dataAtual = `${ano}-${mes}-${dia}`;
    // const dataAtual = new Date().toISOString().split('T')[0]

    // COMO SERIA UTILIZANDO SLIP AO INVES DE SUBSTRING
    // const listaCaracteresData = data.split('/')
    // const dataFormatada = `${listaCaracteresData[2]}-${listaCaracteresData[1]}-${listaCaracteresData[0]}`

    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dataAtual}`
    // axios.get(url).then(dadosNASA => {
    //   console.log(dadosNASA.data)
    //   setEnderecoImagem(dadosNASA.data.url)
    //   const dataDaRequisicao = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY")
    //   setData(dataDaRequisicao)
    // })
    const dadosNASA = await axios.get(url)
    console.log(dadosNASA.data)
    setEnderecoImagem(dadosNASA.data.url)
    setCarregando(false)
  }
  
  useEffect(() => {
    buscarDadosApi()
  }, [])

  return (
    <>
      {
        carregando ? (
          <>
            <h1>Carregando...</h1>
            <div style={{width: '200px'}}>
              <Lottie animationData={foguete} loop={true} />
            </div>
          </>
          ) : (
          <>
            <h1>Imagem do dia {data}</h1>
            <div style={{width: '100%', marginBottom: '10px'}}>
              <img src={enderecoImagem} width={500} />
            </div>
            <input 
              style={{marginRight: '10px'}} 
              type='text' 
              value={data} 
              onChange={(event) => { setData(event.target.value) }}
            />
            <button onClick={buscarDadosApi}>Buscar dados da API</button>
          </>
        )
      }
      
    </>
  )
}

export default App
