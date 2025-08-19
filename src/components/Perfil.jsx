import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import estilos from "../estilos/Perfil.module.css";
import { FaUserFriends, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import AmostraDoCurriculo from "./AmostraDoCurriculo";

function Perfil({ dados, curriculoRef }) {
  const [seguidoresAnim, setSeguidoresAnim] = useState(0);
  const [seguindoAnim, setSeguindoAnim] = useState(0);
  const [bioAnim, setBioAnim] = useState("");
  const [mostrarCurriculo, setMostrarCurriculo] = useState(false); // estado do botão

  useEffect(() => {
    if (!dados) return;

    let seguidores = 0;
    const intervalSeguidores = setInterval(() => {
      seguidores += Math.ceil(dados.followers / 50);
      if (seguidores >= dados.followers) {
        seguidores = dados.followers;
        clearInterval(intervalSeguidores);
      }
      setSeguidoresAnim(seguidores);
    }, 20);

    let seguindo = 0;
    const intervalSeguindo = setInterval(() => {
      seguindo += Math.ceil(dados.following / 50);
      if (seguindo >= dados.following) {
        seguindo = dados.following;
        clearInterval(intervalSeguindo);
      }
      setSeguindoAnim(seguindo);
    }, 20);

    let index = 0;
    const bioCompleta = dados.bio || "Sem biografia";
    const intervalBio = setInterval(() => {
      setBioAnim(bioCompleta.slice(0, index + 1));
      index++;
      if (index >= bioCompleta.length) clearInterval(intervalBio);
    }, 50);

    return () => {
      clearInterval(intervalSeguidores);
      clearInterval(intervalSeguindo);
      clearInterval(intervalBio);
    };
  }, [dados]);

  if (!dados) return <p>Carregando perfil...</p>;

  return (
    <motion.section
      className={estilos.perfil}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a href={dados.html_url} target="_blank" rel="noopener noreferrer" title="Ver GitHub">
        <img
          src={dados.avatar_url}
          alt="Foto de perfil"
          className={estilos.imagem}
        />
      </a>
      <h2 className={estilos.nome}>{dados.name}</h2>
      <p className={estilos.info}><strong>Biografia:</strong> {bioAnim}</p>
      <p className={estilos.info}>
        <FaUserFriends style={{ marginRight: "5px" }} /> 
        <strong>Seguidores:</strong> {seguidoresAnim}
      </p>
      <p className={estilos.info}>
        <FaUserFriends style={{ marginRight: "5px" }} /> 
        <strong>Seguindo:</strong> {seguindoAnim}
      </p>
      <p className={estilos.info}>
        <FaMapMarkerAlt style={{ marginRight: "5px" }} /> 
        <strong>Localização:</strong> {dados.location || "Não informada"}
      </p>
      <p className={estilos.info}>
        <FaGithub style={{ marginRight: "5px" }} /> 
        <a href={dados.html_url} target="_blank" rel="noopener noreferrer">GitHub</a>
      </p>

   
    </motion.section>
  );
}

export default Perfil;
