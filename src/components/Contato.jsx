import { useState } from "react";
import estilos from "../estilos/Contato.module.css";

function Contato() {
  const [mensagem, setMensagem] = useState("");

  const enviarWhatsApp = () => {
    if (!mensagem) return alert("Digite uma mensagem antes de enviar!");
    const numero = "5591984572107"; // Brasil (55) + DDD 91 + número
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section className={estilos.contato}>
      <h2>Entre em Contato</h2>
      <textarea
        className={estilos.textarea}
        rows="4"
        placeholder="Digite sua mensagem..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button className={estilos.botao} onClick={enviarWhatsApp}>
        Enviar para WhatsApp
      </button>
    </section>
  );
}

export default Contato;
