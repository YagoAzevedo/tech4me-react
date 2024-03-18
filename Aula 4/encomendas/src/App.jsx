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

function App() {
  const [tab, setTab] = useState("pedido-feito");
  return (
    <>
      <Container>
        <Box>
          <Tabs
            value={tab}
            onChange={(event, novoValor) => {
              setTab(novoValor);
            }}
            aria-label="basic tabs example"
          >
            <Tab label="Pedido feito" value={"pedido-feito"} />
            <Tab label="Em rota" value={"em-rota"} />
            <Tab label="Entregue" value={"entregue"} />
          </Tabs>

          <List>
            {todasEncomendas.map((encomenda) => (
              <ListItem>
                <ListItemText primary={encomenda.number} secondary={encomenda.cliente} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </>
  );
}

export default App;
