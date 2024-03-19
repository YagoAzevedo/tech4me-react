import "./App.css";
import Container from "./Container";
import Box from "./Box";
import { todasEncomendas } from "./dadosApi";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

function App() {
  const filtraEncomendas = (status) => {
    return todasEncomendas.filter(encomenda => encomenda.ultimoStatus === status)
  }

  const [tab, setTab] = useState("pedido-feito");
  const [encomendasDaTab, setEncomendasDaTab] = useState(filtraEncomendas("pedido-feito"))
  const [encomendaSelecionada, setEncomendaSelecionada] = useState()
  const [passoAtivo, setPassoAtivo] = useState(0) // salva o passo selecionado com base no pedido clicado
  const alteraAbaELista = (abaSelecionada) => {
    setTab(abaSelecionada);
    setEncomendasDaTab(filtraEncomendas(abaSelecionada))
  }
  const atualizaLinhaDoTempo = (encomenda) => {
    setEncomendaSelecionada(encomenda)
    if (encomenda.ultimoStatus === "pedido-feito") {
      setPassoAtivo(0)
    } else if (encomenda.ultimoStatus === "em-rota") {
      setPassoAtivo(1)
    } else if (encomenda.ultimoStatus === "entregue") {
      setPassoAtivo(2)
    }
  }
  return (
    <>
      <Container>
        <Box>
          <Tabs
            value={tab}
            onChange={(event, abaSelecionada) => {
              alteraAbaELista(abaSelecionada)
            }}
            aria-label="basic tabs example"
          >
            <Tab label="Pedido feito" value={"pedido-feito"} />
            <Tab label="Em rota" value={"em-rota"} />
            <Tab label="Entregue" value={"entregue"} />
          </Tabs>

          <List>
            {encomendasDaTab.map((encomenda) => (
              <ListItem>
                <ListItemText 
                  onClick={() => { atualizaLinhaDoTempo(encomenda) }} 
                  primary={encomenda.number} secondary={encomenda.cliente}
                />
              </ListItem>
            ))}
          </List>
          <Stepper activeStep={passoAtivo} alternativeLabel>
            <Step key={'pedido-feito'}>
              <StepLabel>
                <strong>{'Pedido feito '} </strong>
                <Typography variant={'cation'} sx={{color: '#5c5858'}}>
                  {encomendaSelecionada?.historico?.[0]?.data}
                </Typography>
              </StepLabel>
            </Step>
            <Step key={'em-rota'}>
              <StepLabel>
                <strong>{'Pedido em rota '}</strong>
                <Typography variant={'cation'} sx={{color: '#5c5858'}}>
                  {encomendaSelecionada?.historico?.[1]?.data}
                </Typography>
              </StepLabel>
            </Step>
            <Step key={'entregue'}>
              <StepLabel>
                <strong>{'Entregue '}</strong>
                <Typography variant={'cation'} sx={{color: '#5c5858'}}>
                  {encomendaSelecionada?.historico?.[2]?.data}
                </Typography>
              </StepLabel>
            </Step>
          </Stepper>
        </Box>
      </Container>
    </>
  );
}

export default App;
