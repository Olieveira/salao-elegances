import Image from "next/image";
import { useState } from "react";
import leftArrow from "../src/icones/left-arrow.png";
import rightArrow from "../src/icones/right-arrow.png";

export default function Servicos() {
  const phone1 = process.env.NEXT_PUBLIC_PHONE1;
  const phone2 = process.env.NEXT_PUBLIC_PHONE2;
  let msg = `*Ola*, fui redirecionado(a) do site!\n\n
  *MENSAGEM ENVIADA AUTOMATICAMENTE!*`;

  let t = 0;
  let tAnimation = 0;

  const [current, setCurrent] = useState(0);

  const servicos = [
    ["CORTE MASCULINO", phone1],
    ["CORTE FEMININO", phone1],
    ["CORTE INFANTIL", phone1],
    ["PROGRESSIVA", phone1],
    ["SELAGEM", phone1],
    ["BOTOX PLÁSTICA CAPILAR", phone1],
    ["NUTRIÇÃO E RECONSTRUÇÃO", phone1],
    ["CRONOGRAMA CAPILAR", phone1],
    ["MANICURE", phone2],
    ["PEDICURE", phone2],
    ["DEPILAÇÃO", phone2],
  ];

  function changeCurrentClick(indexClick) {
    if (typeof window !== "undefined") {
      const serviceText = document.getElementById("serviceText");
      clearTimeout(t);
      clearTimeout(tAnimation);
      setCurrent(indexClick);

      serviceText.classList.add("show-opacity-animation");

      tAnimation = setTimeout(
        () => serviceText.classList.remove("show-opacity-animation"),
        1000
      );
    }
  }

  return (
    <div
      id="service"
      className="mt-5 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mx-2 w-100 services-content d-flex flex-column justify-content-center align-items-center">
        <div className="services-bg d-flex flex-column justify-content-center align-items-center">
          <div className="slider-content d-flex flex-column justify-content-center align-items-center">
            <div className="info-content d-flex flex-column justify-content-center aling-items-center blur-blackBrightness">
              <div className="img-rotation d-flex flex-row justify-content-center align-items-center">
                <div className=""></div>
              </div>
              <div className="mb-3">
                <h2>SERVIÇOS</h2>
              </div>
              <div id="serviceText" className="mb-5 show-opacity-animation">
                {servicos[current][0]}
              </div>
              <div>
                <a
                  href={`https://wa.me/${servicos[current][1]}?text=${encodeURI(
                    msg
                  )}`}
                  target="_blank"
                >
                  AGENDAR
                </a>
              </div>
            </div>
            <div className="selectors-bar w-100 d-flex flex-row justify-content-center align-items-center blur-blackBrightness">
              {servicos.map(function onEach(item, index) {
                if (index >= servicos.length - 1) {
                  if (current + 1 < servicos.length) {
                    t = setTimeout(() => changeCurrentClick(current + 1), 5000);
                  } else {
                    t = setTimeout(() => changeCurrentClick(0), 5000);
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
                <Image
                  onClick={() => {
                    changeCurrentClick(
                      current == 0 ? servicos.length - 1 : current - 1
                    );
                  }}
                  src={leftArrow}
                  width={"60px"}
                  height={"60px"}
                />
              </div>
              <div>
                <Image
                  onClick={() => {
                    changeCurrentClick(
                      current >= servicos.length - 1 ? 0 : current + 1
                    );
                  }}
                  src={rightArrow}
                  width={"60px"}
                  height={"60px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
