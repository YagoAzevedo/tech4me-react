import { useParams } from "react-router-dom";

const InformacoesUsuario = () => {
  const { nomeDaUrl } = useParams();
  const usuario = {
    yago: {
      nome: "Yago",
      idade: 31,
      profissao: "Desenvolvedor",
    },
    maria: {
      nome: "Maria",
      idade: 1,
      profissao: "Neném",
    },
    teste123: {
      nome: "Teste",
      idade: 123,
      profissao: "Testador",
    }
  };

  return (
    <>
      <h1>Informações da {usuario[nomeDaUrl].nome}</h1>
      <p>Nome: {usuario[nomeDaUrl].nome}</p>
      <p>Idade: {usuario[nomeDaUrl].idade}</p>
      <p>Profissão: {usuario[nomeDaUrl].profissao}</p>
    </>
  );
};

export default InformacoesUsuario;
