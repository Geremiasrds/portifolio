import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import estilos from "../estilos/AmostraDoCurriculo.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import BotaoPDF from "./BotaoPDF";

export default function AmostraDoCurriculo({ curriculoRef }) {
  const componentRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className={estilos.container}>

      <div style={{ marginBottom: "20px", textAlign: "center" }}>
      </div>

      <div ref={componentRef} className={estilos.curriculo}>
        {/* SOBRE */}
        <section className={estilos.sobre}>
          <h1>Geremias Rodrigues da Silva</h1>
          <p>
            Desenvolvedor Frontend | Apaixonado por tecnologia, ambicioso em
            aprender e crescer constantemente.
          </p>
          <p>
            <FaLinkedin /> linkedin.com/in/geremiasrds &nbsp; | &nbsp;
            <FaGithub /> github.com/geremiasrds &nbsp; | &nbsp;
            <FaEnvelope /> geremiasds00@gmail.com
          </p>
        </section>

        {/* EXPERIÊNCIA */}
        <section className={estilos.secao}>
          <h2>Experiência</h2>
          <ul className={estilos.lista}>
            <li>
              <strong>Projetos Pessoais</strong> (2023-2025) <br />
              Desenvolvimento de aplicações web utilizando React, Node.js e boas práticas de versionamento com Git/GitHub.
            </li>
            <li>
              <strong>Estudos Práticos</strong> (2022-2023) <br />
              Criação de interfaces modernas com HTML, CSS e JavaScript, além de integração com APIs.
            </li>
          </ul>
        </section>

        {/* HABILIDADES */}
        <section className={estilos.secao}>
          <h2>Habilidades</h2>
          <ul className={estilos.lista}>
            <li>HTML, CSS, JavaScript, React, Vite</li>
            <li>Node.js, Express</li>
            <li>Git e GitHub</li>
            <li>Responsividade, UI/UX e Performance</li>
          </ul>
        </section>

        {/* FORMAÇÃO */}
        <section className={estilos.secao}>
          <h2>Formação</h2>
          <ul className={estilos.lista}>
            <li>Ensino Médio Completo</li>
          </ul>
        </section>

        {/* PROJETOS */}
        <section className={estilos.secao}>
          <h2>Projetos</h2>
          <ul className={estilos.lista}>
            <li>
              <strong>MeuTreino</strong> - Aplicativo web para gerenciamento de treinos com React, Context API e Framer Motion.
            </li>
            <li>
              <strong>Portfólio Interativo</strong> - Website profissional mostrando projetos com React e animações avançadas.
            </li>
          </ul>
        </section>

        <footer className={estilos.rodape}>
          <p>© 2025 Geremias RDS - Todos os direitos reservados</p>
        </footer>
      </div>

      {curriculoRef && (
        <div style={{ marginTop: "20px" }}>
          <BotaoPDF
            targetRef={curriculoRef}
            nomeArquivo="Curriculo-Geremias.pdf"
            texto="Baixar Currículo"
          />
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "6px 10px",
              cursor: "pointer",
              borderRadius: "6px",
              backgroundColor: "#b08d57",  // dourado envelhecido
              color: "#0f0f0f",
              border: "none",
              fontWeight: "700",
              boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}

          >
            Voltar ao App
          </button>
        </div>
      )}
    </div>
  );
}
