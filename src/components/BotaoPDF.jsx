import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import estilos from "../estilos/AmostraDoCurriculo.module.css";

export default function BotaoPDF({ targetRef, nomeArquivo = "Documento.pdf", texto = "Baixar PDF" }) {
  const gerarPDF = async () => {
    if (!targetRef || !targetRef.current) return;

    try {
      const canvas = await html2canvas(targetRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(nomeArquivo);
    } catch (err) {
      console.error("Erro ao gerar PDF:", err);
    }
  };

   return (
  <button
    onClick={gerarPDF}
    style={{
      padding: "6px 10px",
      cursor: "pointer",
      borderRadius: "6px",
      backgroundColor: "#b08d57",
      color: "#0f0f0f",
      border: "none",
      fontWeight: "700",
      boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
      textTransform: "uppercase",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = "#d4af7a"}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = "#b08d57"}
  >
    {texto}
  </button>
);
}
