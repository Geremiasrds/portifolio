import { useNavigate } from "react-router-dom";
import Cabecalho from "./Cabecalho";
import Perfil from "./Perfil";
import ListaRepositorios from "./ListaRepositorios";
import Rodape from "./Rodape";
import Botoes from "./Botoes"; // componente de botão reutilizável

export default function PaginaInicial({ perfil, repositorios, curriculoRef }) {
  const navigate = useNavigate();

  return (
    <>
      <Cabecalho curriculoRef={curriculoRef} />
      <Perfil dados={perfil} curriculoRef={curriculoRef} />
      <ListaRepositorios repos={repositorios} />

      {/* Botão para abrir a amostra do currículo em nova página */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <Botoes texto="Ver Currículo" destino="/curriculo" />
      </div>

      <Rodape />
    </>
  );
}
