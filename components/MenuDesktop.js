import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../src/imagens/logo.png";
import Contacts from "./contatosContent.js/Contacts.js";

function MenuDesktop({ empresaY, servicosY }) {
  const [contactVisibility, setContactVisibility] = useState(false);

  const toggleVisibility = () => setContactVisibility((prev) => !prev); // Corrigir toggleVisibility

  useEffect(() => {
    const handleScroll = () => {
      const menu = document.getElementById("menu");
      window.scrollY >= 100
        ? menu.classList.replace("menu", "menu-fixed")
        : menu.classList.replace("menu-fixed", "menu");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Contacts
        visibilidade={contactVisibility}
        fechado={() => setContactVisibility(false)}
      />
      <div
        id="menu"
        className="menu d-flex flex-row justify-content-around align-items-center bottom-shadow w-100"
      >
        <Image className="align-self-start logo" src={logo} width={"80px"} height={"100px"} />
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
          <a href="/">HOME</a>
          <a onClick={() => window.scrollTo(0, empresaY - 100)}>EMPRESA</a>
          <div className="cursor" onClick={() => window.scrollTo(0, servicosY - 100)}>SERVIÇOS</div>
          <div className="cursor" onClick={toggleVisibility}>CONTATOS</div>
          <div className="cursor" onClick={toggleVisibility}>AGENDE SEU HORÁRIO</div>
        </div>
      </div>
    </>
  );
}

export default MenuDesktop;
