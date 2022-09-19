import { useEffect, useState } from "react";

export default function Contacts({ visibilidade, fechado }) {
  const data = false;
  let phoneNumber = 5541984040567;

  if (visibilidade == true) {
    return (
      <>
        <div
          id="contact"
          className="show-opacity-animation contact-content w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="contact-card d-flex flex-column justify-content-center align-items-center">
            <div className="close cursor" onClick={() => fechado(data)}>
              <div></div>
            </div>
            <div className="title-contact">CONTATE-NOS</div>
            <div className="socialMedia-rows d-flex flex-column justify-content-center aling-items-center w-100">
              <a
                href="https://www.facebook.com/Elegances2014"
                target={"_blank"}
              >
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div></div>
                  <div>FACEBOOK</div>
                </div>
              </a>
              <a
                href="https://www.instagram.com/salaoelegancescic/"
                target={"_blank"}
              >
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div></div>
                  <div>INSTAGRAM</div>
                </div>
              </a>
              <a href={`https://wa.me/${phoneNumber}`} target={"_blank"}>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div></div>
                  <div>WHATSAPP</div>
                </div>
              </a>
              <a href="tel://5541984040567" target={"_blank"}>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div></div>
                  <div>TELEFONE</div>
                </div>
              </a>
            </div>

            <div className="presencial-contact">PRESENCIAL</div>
            <a
              href="https://www.google.com.br/maps/place/R.+Jorn.+Augusto+Waldrigues,+286+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81460-238/@-25.5322441,-49.3399249,17z/data=!3m1!4b1!4m5!3m4!1s0x94dcfd16367ce9c3:0x2a499b71456d49bb!8m2!3d-25.532249!4d-49.3377362"
              target={"_blank"}
            >
              <div className="address-contact d-flex flex-row justify-content-start align-items-center w-100">
                <div></div>
                <div>ENDEREÇO</div>
              </div>
            </a>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
