import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Sobre = () => {
  return (
    <>
      <h1>Informações familiares</h1>
      <p>
        <Link to="/sobre/yago">Ir para informações do Yago</Link>
      </p>
      <p>
        <Link to="/sobre/maria">Ir para informações do Maria</Link>
      </p>
      <Outlet />
    </>
  );
};

export default Sobre;
