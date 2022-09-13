import { useEffect } from "react";
import Image from "next/image";
import React, { useState } from "react";
import menu from "../src/icones/menu.png";

function MenuMobile() {
  const [visible, setVisible] = useState("hidden");

  function showMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace("menu", "menu-fixed");
  }

  function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace("menu-fixed", "menu");
  }

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? showMenu() : closeMenu();
      const menu = document.getElementById("menu");
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      id="menu"
      className="d-flex flex-column justify-content-around align-items-center bottom-shadow w-100 menu"
    >
      <div className="d-flex flex-row justify-content-around align-items-center py-2 w-100">
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div
          onClick={() => {
            if (visible == "hidden") {
              setVisible("show");
            } else {
              setVisible("hidden");
            }
          }}
        >
          <Image className="cursor" src={menu} width={"40px"} height={"40px"} />
        </div>
      </div>
      <div className={`${visible}`}>
        <div
          className="links-menu txt-lightBlue d-flex flex-row justify-content-center align-items-center text-center"
          style={{ border: "none" }}
        >
          <a href="/">HOME</a>
          <a href="#">EMPRESA</a>
          <a href="#">SERVICOS</a>
          <a href="#">AGENDE SEU HORARIO</a>
        </div>
      </div>
    </div>
  );
}
export default MenuMobile;
