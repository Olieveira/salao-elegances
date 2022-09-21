
export default function Contacts({ visibilidade, fechado }) {
  const data = false;
  let phone1 = 5541984040567;
  let phone2 = 554197882709;

  if (visibilidade == true) {
    return (
      <>
        <div
          id="contact"
          className="contact-content w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="show-opacity-animation contact-card d-flex flex-column justify-content-center align-items-center">
            <div className="close cursor" onClick={() => fechado(data)}>
              <div></div>
            </div>
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
              <div className="d-flex flex-row justify-content-start align-items-center">
                <div></div>
                <details>
                  <summary>WHATSAPP</summary>
                  <div>
                    <a href={`https://wa.me/${phone1}`} target={"_blank"}>
                      CABELEIREIRO / BARBEARIA
                    </a>
                    <br />
                    <a href={`https://wa.me/${phone2}`} target={"_blank"}>
                      MANICURE / PEDICURE
                    </a>
                  </div>
                </details>
              </div>
              <a href="tel://5541984040567" target={"_blank"}>
                <div className="d-flex flex-row justify-content-start align-items-center">
                  <div></div>
                  <details>
                    <summary>TELEFONE</summary>
                    <div>
                      <a href={`https://wa.me/${phone1}`} target={"_blank"}>
                        CABELEIREIRO / BARBEARIA
                      </a>
                      <br />
                      <a href={`https://wa.me/${phone2}`} target={"_blank"}>
                        MANICURE / PEDICURE
                      </a>
                    </div>
                  </details>
                </div>
              </a>
            </div>

            <div className="presencial-contact">PRESENCIAL</div>
            <a
              className="w-100"
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
