import React, { useEffect } from "react";
import { initLoginForm } from "../../assets/js/validar_login";
import Navbar from "../../components/Navbar";
import Form from "../../components/Form";

const Iniciar = () => {
  useEffect(() => {
    initLoginForm();
  }, []);

  return (
    <>
      <Navbar />
      <Form />
    </>
  );
};

export default Iniciar;
