import { useEffect, useState } from "react";
import { buscarPerfil } from "../services/githubApi";
import estilos from "../estilos/Rodape.module.css";

function Rodape() {
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    async function carregar() {
      const dados = await buscarPerfil("Geremiasrds");
      setPerfil(dados);
    }
    carregar();
  }, []);

  return (
    <footer className={estilos.rodape}>
      {perfil ? (
        <div className={estilos.conteudo}>
          <img
            src={perfil.avatar_url}
            alt="Foto de perfil"
            className={estilos.avatar}
          />
          <div>
            <h3>{perfil.name}</h3>
            <p><strong>Usuário:</strong> {perfil.login}</p>
            <p><strong>Bio:</strong> {perfil.bio || "Sem descrição"}</p>
            <p><strong>Localização:</strong> {perfil.location || "Não informada"}</p>
            <p><strong>Seguidores:</strong> {perfil.followers} | <strong>Seguindo:</strong> {perfil.following}</p>
            <p><strong>Repositórios Públicos:</strong> {perfil.public_repos}</p>
            <p><strong>Perfil:</strong> <a href={perfil.html_url} target="_blank" rel="noopener noreferrer">{perfil.html_url}</a></p>
          </div>
        </div>
      ) : (
        <p>Carregando informações...</p>
      )}
      <p className={estilos.copy}>© {new Date().getFullYear()} - Criado por Geremias</p>
    </footer>
  );
}

export default Rodape;
