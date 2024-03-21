import "./App.css";
import Container from "./Container";
import Box from "./Box";
import { todasEncomendas } from "./dadosApi";
import { useState } from "react";
import Aba from "./Aba";
import ListaDeEncomendas from "./ListaDeEncomendas";
import LinhaDoTempo from "./LinhaDoTempo"

function App() {
  const filtraEncomendas = (status) => {
    return todasEncomendas.filter(encomenda => encomenda.ultimoStatus === status)
  }
  const [encomendasDaTab, setEncomendasDaTab] = useState(filtraEncomendas("pedido-feito"))
  const [encomendaSelecionada, setEncomendaSelecionada] = useState()
  const [passoAtivo, setPassoAtivo] = useState(0) // salva o passo selecionado com base no pedido clicado
  return (
    <>
      <Container>
        <Box>
          <Aba modificarListaAoAlterarAba={setEncomendasDaTab} />
          <ListaDeEncomendas 
            encomendas={encomendasDaTab}
            selecionarEncomenda={setEncomendaSelecionada}
            alterarPassoAtivo={setPassoAtivo}
          />
          <LinhaDoTempo passo={passoAtivo} encomenda={encomendaSelecionada} />
        </Box>
      </Container>
    </>
  );
}

export default App;
