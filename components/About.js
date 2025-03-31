import AboutResponsive from "./AboutResponsive";

const AboutSection = ({ title, text, imgClass, link }) => (
  <div className="w-100 p-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
    <div className="d-flex flex-column justify-content-center align-items-center content-img w-25">
      <div className={imgClass}></div>
    </div>
    <div className="text-center items-about">
      <h2>{title}</h2>
      <p>
        {text} {link && <a className="cursor" onClick={link}>CONTATE-NOS!!</a>}
      </p>
    </div>
  </div>
);

export default function About() {
  return (
    <div
      id="about"
      className="w-100 about d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "500px" }}
    >
      <AboutSection
        title="EXPERIÊNCIA"
        text="Há mais de 15 anos atuando na área, oferecemos um serviço excelente oriundo de muita prática e melhora!"
        imgClass="first-img"
      />
      <span className="line-caract-about" />
      <div className="w-100 p-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
        <AboutResponsive />
      </div>
      <span className="line-caract-about" />
      <AboutSection
        title="ACESSIBILIDADE"
        text="Oferecemos acesso aos nossos serviços em diversas plataformas para facilitar seu contato conosco."
        imgClass="third-img"
        link={() => window.scrollTo(0, 10000)}
      />
      <span className="line-caract-about" />
    </div>
  );
}
