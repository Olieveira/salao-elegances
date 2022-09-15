import Image from "next/image";
import { useEffect, useState } from "react";
import leftArrow from "../src/icones/left-arrow.png";
import rightArrow from "../src/icones/right-arrow.png";

export default function Servicos() {
  let t = 0;
  const [current, setCurrent] = useState(0);

  const servicos = [
    "CORTE MASCULINO",
    "CORTE FEMININO",
    "CORTE INFANTIL",
    "PROGRESSIVA",
    "SELAGEM",
    "BOTOX PLÁSTICA CAPILAR",
    "NUTRIÇÃO E RECONSTRUÇÃO",
    "CRONOGRAMA CAPILAR",
    "MANICURE",
    "PEDICURE",
    "DEPILAÇÃO",
  ];

  function changeCurrentClick(indexClick) {
    clearTimeout(t);
    setCurrent(indexClick);
  }

  return (
    <div
      id="service"
      className="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mx-2 w-100 services-content d-flex flex-column justify-content-center align-items-center">
        <div className="services-bg d-flex flex-column justify-content-center align-items-center">
          <div className="slider-content d-flex flex-column justify-content-center align-items-center">
            <div className="info-content d-flex flex-column justify-content-center aling-items-center blur">
              <div className="mb-3">
                <h2>SERVIÇOS</h2>
              </div>
              <div className="mb-5">{servicos[current]}</div>
              <div>
                <a href="#">AGENDAR</a>
              </div>
            </div>
            <div className="selectors-bar w-100 d-flex flex-row justify-content-center align-items-center">
              {servicos.map(function onEach(item, index) {
                if (index >= servicos.length - 1) {
                  if (current + 1 < servicos.length) {
                    t = setTimeout(() => setCurrent(current + 1), 5000);
                  } else {
                    t = setTimeout(() => setCurrent(0), 5000);
                  }
                }

                if (index == current) {
                  return (
                    <div
                      key={item}
                      className="selector current"
                      onClick={() => {
                        changeCurrentClick(index);
                      }}
                    ></div>
                  );
                } else {
                  return (
                    <div
                      key={item}
                      className="selector"
                      onClick={() => {
                        changeCurrentClick(index);
                      }}
                    ></div>
                  );
                }
              })}
            </div>
          </div>
          <div className="arrows d-flex flex-column justify-content-center align-items-center w-100">
            <div className="d-flex flex-row justify-content-between align-items-center w-100">
              <div>
                <Image onClick={() => {changeCurrentClick(current == 0 ? servicos.length - 1 : current - 1)}} src={leftArrow} width={"60px"} height={"60px"} />
              </div>
              <div>
                <Image onClick={() => {changeCurrentClick(current >= servicos.length - 1 ? 0 : current + 1)}} src={rightArrow} width={"60px"} height={"60px"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
