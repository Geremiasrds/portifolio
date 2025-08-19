import { motion } from "framer-motion";
import estilos from "../estilos/ListaRepositorios.module.css";
import { FaGithub, FaStar } from "react-icons/fa";

function ListaRepositorios({ repos }) {
  if (!repos.length) return <p>Nenhum repositório encontrado.</p>;

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <section className={estilos.lista}>
      <h2 className={estilos.titulo}>Meus Repositórios</h2>
      <ul>
        {repos.map((repo, index) => (
          <motion.li
            key={repo.id}
            className={estilos.item}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={estilos.link}
            >
              <FaGithub style={{ marginRight: "5px" }} /> {repo.name}
            </a>{" "}
            – {repo.description || "Sem descrição"}
            <div className={estilos.badges}>
              {repo.language && <span className={estilos.badge}>{repo.language}</span>}
              {repo.stargazers_count > 0 && (
                <span className={estilos.badge}>
                  <FaStar style={{ marginRight: "3px", color: "#ffb400" }} />
                  {repo.stargazers_count}
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ListaRepositorios;
