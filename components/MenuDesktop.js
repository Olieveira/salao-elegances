import Image from "next/image";
import React from "react";
import logo from "../src/imagens/logo.jpg";

function MenuDesktop() {
  return (
    <div className="d-flex flex-row justify-content-around align-items-center bottom-shadow">
      <Image className="align-self-start" src={logo} width={"100px"} height={"100px"} />
      <div className="txt-lightBlue titulo">SALÃO ELEGANCES</div>
      <div className="links-menu txt-lightBlue d-flex flex-row flex-wrap justify-content-around align-items-center">
        <a href="/">HOME</a>
        <a href="#">EMPRESA</a>
        <a href="#">SERVICOS</a>
        <a href="#">AGENDE SEU HORARIO</a>
      </div>
    </div>
  );
}
export default MenuDesktop;
