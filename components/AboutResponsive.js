export default function AboutResponsive() {
  return (
    <>
      {/* Desktop layout */}
      <div className="d-none d-md-flex">
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
      </div>

      {/* Mobile layout */}
      <div className="d-flex d-md-none flex-column justify-content-center align-items-center">
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
      </div>
    </>
  );
}
