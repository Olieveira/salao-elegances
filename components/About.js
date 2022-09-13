import AboutResponsive from "./AboutResponsive";

export default function About() {
  return (
    <>
      <div id="about"
        className="w-100 about d-flex flex-column justify-content-center align-items-center"
        style={{ minHeight: "500px" }}
      >
        <div className="w-100 p-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center first-img w-25">
            <div></div>
          </div>
          <div className="text-center items-about">
            <h2>EXPERIÊNCIA</h2>
            <p>Há mais de 15 anos atuando na àrea, oferecemos um serviço excelente oriundo de muita prática e melhora!</p>
          </div>
        </div>

        <span className="line-caract-about" />

        <div className="w-100 p-4 d-flex flex-row flex-wrap justify-content-center align-items-center">

          <AboutResponsive />
        </div>

        <span className="line-caract-about" />

        <div className="w-100 p-4 d-flex flex-row flex-wrap justify-content-center align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center first-img w-25">
            <div></div>
          </div>
          <div className="text-center items-about">
            <h2>COMUNICAÇÃO</h2>
            <p>Oferecemos contato em diversas plataformas para facilitar seu contato conosco, <a href="#">CONTATE-NOS!!</a></p>
          </div>
        </div>
        <span className="line-caract-about" />
      </div>
    </>
  );
}
