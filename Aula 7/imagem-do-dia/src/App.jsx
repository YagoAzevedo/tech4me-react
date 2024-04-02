import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import moment from 'moment'

function App() {
  const [enderecoImagem, setEnderecoImagem] = useState("")
  const [data, setData] = useState("")
  const [carregando, setCarregando] = useState(true)

  const buscarDadosApi = async () => {
    setCarregando(true)
    const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${data}`
    // axios.get(url).then(dadosNASA => {
    //   console.log(dadosNASA.data)
    //   setEnderecoImagem(dadosNASA.data.url)
    //   const dataDaRequisicao = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY")
    //   setData(dataDaRequisicao)
    // })
    const dadosNASA = await axios.get(url)
    console.log(dadosNASA.data)
    setEnderecoImagem(dadosNASA.data.url)
    const dataDaRequisicao = moment(new Date(dadosNASA.data.date)).format("DD/MM/YYYY")
    setData(dataDaRequisicao)
    setCarregando(false)
  }

  useEffect(() => {
    buscarDadosApi()
  }, [])

  return (
    <>
      {
        carregando ? <h1>Carregando...</h1> : (
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
