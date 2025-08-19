import { forwardRef } from "react";
import estilos from "../estilos/Curriculo.module.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Curriculo = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={estilos.curriculo} style={props.style}>
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

      <section className={estilos.secao}>
        <h2>Experiência</h2>
        <ul className={estilos.lista}>
          <li>
            <strong>Projetos Pessoais</strong> (2023-2025) <br />
            Desenvolvimento de aplicações web utilizando React, Node.js e boas
            práticas de versionamento com Git/GitHub.
          </li>
          <li>
            <strong>Estudos Práticos</strong> (2022-2023) <br />
            Criação de interfaces modernas com HTML, CSS e JavaScript, além de
            integração com APIs.
          </li>
        </ul>
      </section>

      <section className={estilos.secao}>
        <h2>Habilidades</h2>
        <ul className={estilos.lista}>
          <li>HTML, CSS, JavaScript, React, Vite</li>
          <li>Node.js</li>
          <li>Git e GitHub</li>
          <li>Responsividade, UI/UX e Performance</li>
        </ul>
      </section>

      <section className={estilos.secao}>
        <h2>Formação</h2>
        <ul className={estilos.lista}>
          <li>Ensino Médio Completo</li>
        </ul>
      </section>

      <section className={estilos.secao}>
        <h2>Projetos</h2>
        <ul className={estilos.lista}>
          <li>
            <strong>MeuTreino</strong> - Aplicativo web para gerenciamento de
            treinos com React, Context API e Framer Motion.
          </li>
          <li>
            <strong>Portfólio Interativo</strong> - Website profissional
            mostrando projetos com React e animações avançadas.
          </li>
        </ul>
      </section>

      <footer className={estilos.rodape}>
        <p>© 2025 Geremias RDS - Todos os direitos reservados</p>
      </footer>
    </div>
  );
});

export default Curriculo;
