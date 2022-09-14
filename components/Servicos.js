import { useEffect, useState } from "react";

export default function Servicos() {
  const [called, setCalled] = useState(false);
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

  useEffect(() => {
    setFunction();
  });

  function setFunction() {
    if (called == false) {
      setInterval(changeCurrent, 2000);
      setCalled(true);
    }
  }

  function changeCurrent() {
    setCurrent(current + 1);
    console.log("current: ", current);
    console.log("lenght: ", servicos.length);
  }

  return (
    <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="mx-2 w-100 services-content d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 services-bg">
          <div className="d-flex flex-column justify-content-center align-items-center blur">
            <div>
              <h2>SERVIÇOS</h2>
            </div>
            <div>{servicos[current]}</div>
            <div>
              <a href="#">AGENDAR</a>
            </div>
          </div>
        </div>
        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
          {servicos.map(function onEach(item, index) {
            if (index == current) {
              return (
                <a key={item} className="selector current">
                  O
                </a>
              );
            } else {
              return (
                <a key={item} className="selector">
                  O
                </a>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
