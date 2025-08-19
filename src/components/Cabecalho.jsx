import { motion } from "framer-motion";
import estilos from "../estilos/Cabecalho.module.css";
import MeusProjetos from "./MeusProjetos";
import PaginaInicial from "./PaginaInicial";

function Cabecalho() {
  const tituloVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const subtituloVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.8 } },
  };

  return (
    <header className={estilos.cabecalho}>
      <motion.h1
        className={estilos.titulo}
        variants={tituloVariants}
        initial="hidden"
        animate="visible"
      >
        Meu Portfólio
      </motion.h1>

      <motion.p
        className={estilos.subtitulo}
        variants={subtituloVariants}
        initial="hidden"
        animate="visible"
        title="Este portfólio consome dados da API do GitHub"
      >
        Consumindo dados da API do GitHub
      </motion.p>

      <MeusProjetos/>
    </header>
  );
}

export default Cabecalho;
