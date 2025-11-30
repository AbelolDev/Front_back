import { useState } from "react";

const MensajeInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const send = () => {
    if (!onSend) return;
    if (!text.trim()) return; // evita enviar vacío

    onSend(text.trim());
    setText("");
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        background: "#e2e8f0",
        borderTop: "1px solid #ccc",
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe un mensaje..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #bbb",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") send();
        }}
      />

      <button
        onClick={send}
        style={{
          marginLeft: "10px",
          padding: "10px 16px",
          background: "#0ea5e9",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default MensajeInput;
