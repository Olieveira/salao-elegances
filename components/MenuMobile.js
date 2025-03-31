import { useEffect, useState } from "react";
import Image from "next/image";
import menu from "../src/icones/menu.png";
import Contacts from "./contatosContent.js/Contacts.js";

function MenuMobile(props) {
  const [contactVisibility, setContactVisibility] = useState(false);
  const [visible, setVisible] = useState("hidden");

  const toggleVisibility = () => setContactVisibility((prev) => !prev);

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
      <Contacts visibilidade={contactVisibility} fechado={() => setContactVisibility(false)} />
      <div
        id="menu"
        className="d-flex flex-column justify-content-around align-items-center bottom-shadow w-100 menu"
      >
        <div className="d-flex flex-row justify-content-around align-items-center py-2 w-100">
          <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
          <div onClick={() => setVisible(visible === "hidden" ? "show" : "hidden")}>
            <Image className="cursor" src={menu} width={40} height={40} alt="Menu" />
          </div>
        </div>
        <div className={`pb-3 ${visible}`}>
          <div
            className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-center align-items-center text-center"
            style={{ border: "none" }}
          >
            <div>
              <a href="/">HOME</a>
              <a onClick={() => window.scrollTo(0, props.empresaY - 100)}>EMPRESA</a>
              <a onClick={() => window.scrollTo(0, props.servicosY - 100)}>SERVIÇOS</a>
            </div>
            <a onClick={toggleVisibility}>CONTATOS</a>
            <div>
              <a onClick={toggleVisibility}>AGENDAR HORÁRIO</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MenuMobile;
