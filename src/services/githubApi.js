import axios from "axios";

const token = import.meta.env.VITE_GITHUB_TOKEN;

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `token ${token}`,
  },
});

export const buscarPerfil = async (usuario) => {
  try {
    const resposta = await api.get(`/users/${usuario}`);
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar perfil:", erro);
    return null;
  }
};

export const buscarRepositorios = async (usuario) => {
  try {
    const resposta = await api.get(`/users/${usuario}/repos?per_page=100`);
    return resposta.data;
  } catch (erro) {
    console.error("Erro ao buscar repositórios:", erro);
    return [];
  }
};
