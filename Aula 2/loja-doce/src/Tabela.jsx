import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Tabela.css'

const rows = [
  {
    id: 1,
    nome: "Torta de limão",
    descricao: "Torta de limão com massa crocante e recheio de limão",
  },
  {
    id: 2,
    nome: "Brigadeiro",
    descricao: "Brigadeiro de chocolate com granulado",
  },
  {
    id: 3,
    nome: "Cuzcuz do rio",
    descricao: "Cuzcuz que não é cuzcuz de verdade",
  },
  {
    id: 4,
    nome: "Bolo de aniversário",
    descricao: "Bolo de aniversário com cobertura de chocolate e granulado",
  },
];

const Tabela = () => {
  return (
    <div style={{width: '100%'}}>
    <TableContainer component={Paper} className="minha-tabela">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={index % 2 === 0 ? {backgroundColor: '#f5f5f5b8'} : {backgroundColor: '#fff'}}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{`Nome: ${row.nome}`}</TableCell>
              <TableCell>{row.descricao}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default Tabela;
