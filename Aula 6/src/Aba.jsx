import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { todasEncomendas } from "./dadosApi";

const Aba = ({ modificarListaAoAlterarAba }) => {
  const filtraEncomendas = (status) => {
    return todasEncomendas.filter(encomenda => encomenda.ultimoStatus === status)
  }
  const [tab, setTab] = useState("pedido-feito");
  const alteraAbaELista = (abaSelecionada) => {
    setTab(abaSelecionada);
    modificarListaAoAlterarAba(filtraEncomendas(abaSelecionada))
  }
  return (
    <>
      <Tabs
        value={tab}
        onChange={(event, abaSelecionada) => {
          alteraAbaELista(abaSelecionada);
        }}
        aria-label="basic tabs example"
      >
        <Tab label="Pedido feito" value={"pedido-feito"} />
        <Tab label="Em rota" value={"em-rota"} />
        <Tab label="Entregue" value={"entregue"} />
      </Tabs>
    </>
  );
};

export default Aba;
