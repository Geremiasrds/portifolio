import { useNavigate } from "react-router-dom";
import estilos from "../estilos/Botoes.module.css";

export default function Botoes({ texto, destino, icone }) {
  const navigate = useNavigate();

  return (
    <button
      className={estilos.botao}
      onClick={() => navigate(destino)}
      aria-label={texto}
    >
      {icone && <span className={estilos.icone}>{icone}</span>}
      {texto}
    </button>
  );
}
