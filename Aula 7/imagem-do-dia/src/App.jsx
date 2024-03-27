import './App.css'
import axios from 'axios'

function App() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2024-01-01'
  axios.get(url).then((dadosNASA) => {
    debugger
    console.log(dadosNASA.data)
  })

  return (
    <>
      <h1>Imagem do dia</h1>
    </>
  )
}

export default App
