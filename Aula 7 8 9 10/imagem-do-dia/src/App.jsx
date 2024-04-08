import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import moment from 'moment'
import Lottie from "lottie-react";
import foguete from "./assets/animacao.json";

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState("03/04/2024")
  const [carregando, setCarregando] = useState(true)

  const buscarDadosApi = async () => {
    setCarregando(true)
    // data = "03/04/2024"
    const dia = data.substring(0, 2)
    const mes = data.substring(3,5)
    const ano = data.substring(6,10)
    const dataFormatada = `${ano}-${mes}-${dia}`

    // COMO SERIA UTILIZANDO SLIP AO INVES DE SUBSTRING
    // const listaCaracteresData = data.split('/')
    // const dataFormatada = `${listaCaracteresData[2]}-${listaCaracteresData[1]}-${listaCaracteresData[0]}`

    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${dataFormatada}`
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
