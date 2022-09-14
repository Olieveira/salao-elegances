import useWindowDimensions from "../pages/useWindowDimensions";

export default function AboutResponsive() {
  const [height, width] = useWindowDimensions();

  if (width > 850) {
    return (
      <>
        <div className="text-center items-about">
          <h2>VARIEDADE</h2>
          <p>
            Nossos profissionais possuem um amplo conhecimento, permitindo-nos
            oferecer uma grande variedade de serviços com muita qualidade!
          </p>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center content-img w-25">
          <div className="second-img"></div>
        </div>
        ;
      </>
    );
  } else {
    return (
      <>
        <div className="d-flex flex-column justify-content-center align-items-center content-img w-25">
          <div className="second-img"></div>
        </div>
        <div className="text-center items-about">
          <h2>VARIEDADE</h2>
          <p>
            Nossos profissionais possuem um amplo conhecimento, permitindo-nos
            oferecer uma grande variedade de serviços com muita qualidade!
          </p>
        </div>
      </>
    );
  }
}
