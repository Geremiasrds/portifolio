import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { buscarPerfil, buscarRepositorios } from "./services/githubApi";
import PaginaInicial from "./components/PaginaInicial";
import Contato from "./components/Contato";
import Curriculo from "./components/Curriculo";
import AmostraDoCurriculo from "./components/AmostraDoCurriculo";

function App() {
  const [perfil, setPerfil] = useState(null);
  const [repositorios, setRepositorios] = useState([]);
  const curriculoRef = useRef(); // Ref para o PDF

  useEffect(() => {
    async function carregarDados() {
      const dadosPerfil = await buscarPerfil("Geremiasrds");
      const dadosRepos = await buscarRepositorios("Geremiasrds");
      setPerfil(dadosPerfil);
      setRepositorios(dadosRepos);
    }
    carregarDados();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PaginaInicial
            perfil={perfil}
            repositorios={repositorios}
            curriculoRef={curriculoRef}
            />
          }
        />
          <Route
            path="/curriculo"
            element={<AmostraDoCurriculo curriculoRef={curriculoRef} />}
          />
        <Route path="/contato" element={<Contato />} />
        {/* <Route path="/projetos" element={<MeusProjetos/> } /> */}
        {/* Rota do currículo limpa, sem cabeçalho nem rodapé */}
      </Routes>


      <Curriculo
        ref={curriculoRef}
        style={{
          position: "absolute",
          left: "-9999px",
          top: 0,
          width: "210mm",
        }}
      />
    </Router>
  );
}

export default App;
