import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import estilos from "../estilos/MeusProjetos.module.css";

// Dados separados em um array
const projetos = [
  {
    nome: "Site de Empresa",
    descricao: "Site da empresa Big Refrigerações.",
    github: "https://github.com/Geremiasrds/site-de-empresa",
    pages: "https://geremiasrds.github.io/site-de-empresa",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    nome: "Pock Devs",
    descricao: "Um projeto com foco no esforço de um programador.",
    github: "https://github.com/Geremiasrds/pock-devs",
    pages: "https://geremiasrds.github.io/pock-devs",
    tech: ["HTML", "CSS"],
  },
  {
    nome: "Login Geral",
    descricao: "Painel de login com acesso a funcionalidades após logar.",
    github: "https://github.com/Geremiasrds/login-geral",
    pages: "https://geremiasrds.github.io/login-geral",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

// Variantes globais
const fadeScale = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.2 } },
};

function MeusProjetos() {
  const [abrir, setAbrir] = useState(false);
  const [preview, setPreview] = useState(null);
  const [previewGrande, setPreviewGrande] = useState(null);

  return (
    <section className={estilos.container}>
      <button
        className={estilos.botao}
        onClick={() => setAbrir(true)}
        aria-label="Abrir lista de projetos"
      >
        Meus Projetos
      </button>

      <AnimatePresence>
        {abrir && (
          <motion.div
            className={estilos.modalFundo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAbrir(false)}
          >
            <motion.div
              className={estilos.modal}
              variants={fadeScale}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Título dentro do modal */}
              <h1
                style={{
                  color: "#d4af7a",
                  fontFamily: "Georgia, serif",
                  fontSize: "2rem",
                  marginBottom: "2rem",
                  borderBottom: "2px solid #b08d57",
                  display: "inline-block",
                  paddingBottom: "0.3rem",
                  letterSpacing: "1px",
                  textAlign: "center",
                }}
              >
                Meus Projetos
              </h1>

              <h2>🚀 Projetos em Destaque</h2>

              <div className={estilos.cards}>
                {projetos.map((proj, index) => (
                  <motion.div
                    key={index}
                    className={estilos.card}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3>{proj.nome}</h3>
                    <p>{proj.descricao}</p>

                    <div className={estilos.badges}>
                      {proj.tech.map((t, i) => (
                        <span key={i} className={estilos.badge}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={estilos.links}>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver código no GitHub de ${proj.nome}`}
                      >
                        Código (GitHub)
                      </a>
                      <span
                        className={estilos.verOnline}
                        onMouseEnter={() => setPreview(proj.pages)}
                        onMouseLeave={() => setPreview(null)}
                        onClick={() => setPreviewGrande(proj.pages)}
                      >
                        Ver Online
                      </span>
                      <a
                        href={proj.pages}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={estilos.verOnline}
                        aria-label={`Abrir página online de ${proj.nome}`}
                      >
                        Abrir Pages
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mini preview hover */}
              <AnimatePresence>
                {preview && !previewGrande && (
                  <motion.div
                    className={estilos.previewFlutuante}
                    variants={fadeScale}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <iframe src={preview} title="Preview do Projeto" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Preview grande */}
              <AnimatePresence>
                {previewGrande && (
                  <motion.div
                    className={estilos.previewGrande}
                    variants={fadeScale}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <button
                      className={estilos.fecharPreview}
                      onClick={() => setPreviewGrande(null)}
                      aria-label="Fechar preview"
                    >
                      Fechar Preview
                    </button>
                    <iframe src={previewGrande} title="Preview do Projeto" />
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                className={estilos.fechar}
                onClick={() => setAbrir(false)}
                aria-label="Fechar modal"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MeusProjetos;
