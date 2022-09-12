import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import logo from "../src/imagens/logo.jpg";

function MenuDesktop() {
  const [y, setY] = useState(-100);
  const [visibility, setVisibility] = useState("visible");

  async function showMenu() {
    setVisibility("visible");
    for (let i = -100; i <= 0; i = i + 1) {
      await setTimeout(function () {}, 1000);
      setY(i);
    }
  }

  function closeMenu() {
    setVisibility("hidden");
    setY(-100);
  }

  useEffect(() => {
    function handleScroll() {
      window.scrollY >= 100 ? showMenu() : closeMenu();
    }
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <>
      <div className="d-flex flex-row justify-content-around align-items-center bottom-shadow w-100">
        <Image
          className="align-self-start"
          src={logo}
          width={"100px"}
          height={"100px"}
        />
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
          <a href="/">HOME</a>
          <a href="#">EMPRESA</a>
          <a href="#">SERVICOS</a>
          <a href="#">AGENDE SEU HORARIO</a>
        </div>
      </div>

      <div
        className="d-flex flex-row justify-content-around align-items-center bottom-shadow w-100"
        style={{
          position: "fixed",
          top: `${y}px`,
          visibility: `${visibility}`,
        }}
      >
        <Image
          className="align-self-start"
          src={logo}
          width={"100px"}
          height={"100px"}
        />
        <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
        <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
          <a href="/">HOME</a>
          <a href="#">EMPRESA</a>
          <a href="#">SERVICOS</a>
          <a href="#">AGENDE SEU HORARIO</a>
        </div>
      </div>
    </>
  );
}
export default MenuDesktop;
