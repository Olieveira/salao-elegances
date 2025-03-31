import { useEffect } from "react";

export default function Contacts({ visibilidade, fechado }) {
  const phone1 = process.env.NEXT_PUBLIC_PHONE1;
  const phone2 = process.env.NEXT_PUBLIC_PHONE2;

  if (!visibilidade) return null;

  return (
    <div
      id="contact"
      className="contact-content w-100 h-100 d-flex flex-column justify-content-center align-items-center"
    >
      <div className="show-opacity-animation contact-card d-flex flex-column justify-content-center align-items-center">
        <div className="close cursor" onClick={() => fechado(false)}>
          <div></div>
        </div>
        <div className="socialMedia-rows d-flex flex-column justify-content-center align-items-start w-100">
          <a href="https://www.facebook.com/" target="_blank">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <div></div>
              <div>FACEBOOK</div>
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div className="d-flex flex-row justify-content-start align-items-center">
              <div></div>
              <div>INSTAGRAM</div>
            </div>
          </a>
          <ContactDetails
            title="WHATSAPP"
            links={[
              { href: `https://wa.me${phone1 ? '/' + phone1 : ''}`, label: "Cabeleireiro / Barbearia" },
              { href: `https://wa.me${phone2 ? '/' + phone2 : ''}`, label: "Manicure / Pedicure" },
            ]}
          />
          <ContactDetails
            title="TELEFONE"
            links={[
              { href: `https://wa.me${phone1 ? '/' + phone1 : ''}`, label: "Cabeleireiro / Barbearia" },
              { href: `https://wa.me${phone2 ? '/' + phone2 : ''}`, label: "Manicure / Pedicure" },
            ]}
          />
        </div>
        <div className="presencial-contact">PRESENCIAL</div>
        <a
          className="w-100"
          href="https://www.google.com.br/maps/"
          target="_blank"
        >
          <div className="address-contact d-flex flex-row justify-content-start align-items-center w-100">
            <div></div>
            <div>ENDEREÇO</div>
          </div>
        </a>
      </div>
    </div>
  );
}

function ContactDetails({ title, links }) {
  return (
    <div className="d-flex flex-row justify-content-start align-items-center w-100">
      <div></div>
      <details>
        <summary>{title}</summary>
        <div>
          {links && links.map((link, index) => (
            <div key={index} className="w-100">
              <a href={link.href} target="_blank">{link.label}</a>
              {index < links.length - 1 && <br />}
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}
