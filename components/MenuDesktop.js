import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import React from "react";
import logo from "../src/imagens/logo.png";

function MenuDesktop(empresaY, servicosY) {

  function showMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace('menu', 'menu-fixed');
  };

  function closeMenu() {
    const menu = document.getElementById("menu");
    menu.classList.replace('menu-fixed', 'menu');
  }

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? showMenu() : closeMenu();
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div id="menu" className="menu d-flex flex-row justify-content-around align-items-center bottom-shadow w-100">
        <Image
          className="align-self-start logo"
          src={logo}
          width={"80px"}
          height={"100px"}
        />
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
          <a href="/">HOME</a>
          <a onClick={() => {window.scrollTo(0, empresaY)}}>EMPRESA</a>
          <a href="#">SERVICOS</a>
          <a href="#">AGENDE SEU HORARIO</a>
        </div>
      </div>
    </>
  );
}
export default MenuDesktop;
