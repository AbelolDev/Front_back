import { useEffect, useState, useRef } from "react";
import axios from "axios";
import MensajesList from "../../components/MensajesList";
import MensajeInput from "../../components/MensajeInput";
import Navbar from "../../components/Navbar";

const API_URL = "/api/messages";

const COLORS = {
  headerBg: "#1e293b",
  headerText: "white",
  background: "#f1f5f9",
};

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Cargar mensajes al inicio
  const loadMessages = async () => {
    try {
      const res = await axios.get(API_URL);
      setMessages(res.data);
      scrollToBottom();
    } catch (e) {
      console.error("Error al cargar mensajes:", e);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  // Enviar mensaje
  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    try {
      await axios.post(API_URL, {
        usuario: "Tester",
        contenido: content,
      });

      // Recargar mensajes
      loadMessages();
    } catch (error) {
      console.error("Error enviando mensaje:", error);
    }
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#e2e8f0",
        }}
      >
        <div
          style={{
            width: "350px",
            height: "500px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: COLORS.background,
            border: "1px solid #ccc",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "10px",
              backgroundColor: COLORS.headerBg,
              color: COLORS.headerText,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Mensajes
          </div>

          {/* Lista de mensajes */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "10px",
            }}
          >
            <MensajesList messages={messages} />
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <MensajeInput onSend={handleSendMessage} />
        </div>
      </div>
    </>
  );
}
