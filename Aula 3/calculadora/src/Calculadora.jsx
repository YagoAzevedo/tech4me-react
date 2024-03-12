import { useState } from 'react';
import './Calculadora.css'

const Calculadora = () => {
  const [expressao, setExpressao] = useState('')
  const [resultado, setResultado] = useState(0)

  const calcular = () => {
    const resultadoDaConta = eval(expressao)
    setResultado(resultadoDaConta)
  }
    
  return (
    <>
      <div className="wrapper">
        <input value={expressao} onChange={(e) => { setExpressao(e.target.value) }} />
      </div>
      
      <div className="wrapper">
        <button onClick={calcular}>Calcular</button>
      </div>
      
      <div className="resultado">{resultado}</div>
    </>
  );
};

export default Calculadora;
