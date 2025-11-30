const MensajesList = ({ messages }) => {
  return (
    <>
      {messages.map((msg) => (
        <div
          key={msg.id_mensaje}
          style={{
            display: "flex",
            justifyContent:
              msg.usuario === "Abel" ? "flex-end" : "flex-start",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              maxWidth: "70%",
              background: msg.usuario === "Abel" ? "#d1e7dd" : "white",
              padding: "8px 12px",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <strong style={{ fontSize: "0.75rem", color: "#555" }}>
              {msg.usuario}
            </strong>
            <div>{msg.contenido}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MensajesList;
