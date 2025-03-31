export default function Footer() {
  return (
    <>
      <div className="footer d-flex flex-column justify-content-center align-items-center w-100 mt-5 px-2 py-1">
        <div className="d-flex flex-row justify-content-center align-items-center social-media-imgs">
          <a href="https://www.facebook.com" target="_blank">
            <div></div>
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <div></div>
          </a>
          <a
            href="https://www.google.com.br/maps"
            target="_blank"
          >
            <div></div>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-start w-100">
          <div>© Salão Elegances</div>
          <div>Curitiba, PR</div>
        </div>
      </div>
    </>
  );
}
