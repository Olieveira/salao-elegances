import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import logo from "../src/imagens/logo.png";
import Contacts from "./contatosContent.js/Contacts.js";

function MenuDesktop(props) {
  let phoneNumber = 5541984040567;
  let msg = `*Ola*, fui redirecionado(a) do site!\n\n
  *MENSAGEM ENVIADA AUTOMATICAMENTE!*`;

  function showMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace("menu", "menu-fixed");
  }

  function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace("menu-fixed", "menu");
  }

  const [contactVisibility, setContactVisibility] = useState(false);

  const visibilidade = () => {
    setContactVisibility(!contactVisibility);
  };

  const fechado = (fechadoValue) => {
    setContactVisibility(fechadoValue);
  };

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? showMenu() : closeMenu();
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Contacts visibilidade={contactVisibility} fechado={fechado} />
      <div
        id="menu"
        className="menu d-flex flex-row justify-content-around align-items-center bottom-shadow w-100"
      >
        <Image
          className="align-self-start logo"
          src={logo}
          width={"80px"}
          height={"100px"}
        />
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
          <a href="/">HOME</a>
          <a
            onClick={() => {
              window.scrollTo(0, props.empresaY - 100);
            }}
          >
            EMPRESA
          </a>
          <div className="cursor"
            onClick={() => {
              window.scrollTo(0, props.servicosY - 100);
            }}
          >
            SERVICOS
          </div>

          <div
            className="cursor"
            onClick={() => {
              visibilidade();
            }}
          >
            CONTATOS
          </div>
          <div
            className="cursor"
            onClick={() => {
              visibilidade();
            }}
          >
            AGENDE SEU HORARIO
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuDesktop;
