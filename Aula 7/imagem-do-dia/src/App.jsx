import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import moment from 'moment'

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState("")

  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2024-01-01'
  const buscarDadosApi = () => {
    axios.get(url).then((dadosNASA) => {
      console.log(dadosNASA.data)
      setEnderecoImagem(dadosNASA.data.url)
      const dataDaRequisicao = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY")
      setData(dataDaRequisicao)
    })
  }

  useEffect(() => {
    buscarDadosApi()
  }, [])

  return (
    <>
      <h1>Imagem do dia {data}</h1>
      <div style={{width: '100%'}}>
        <img src={enderecoImagem} width={500} />
      </div>
      <button onClick={buscarDadosApi}>Buscar dados da API</button>
    </>
  )
}

export default App
