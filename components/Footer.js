export default function Footer() {
  let phoneNumber = 5541984040567;
  return (
    <>
      <div className="footer d-flex flex-column justify-content-center align-items-center w-100 mt-5 px-2 py-1">
        <div className="d-flex flex-row justify-content-center align-items-center social-media-imgs">
          <a href="https://www.facebook.com/Elegances2014" target={"_blank"}>
            <div></div>
          </a>
          <a
            href="https://www.instagram.com/salaoelegancescic/"
            target={"_blank"}
          >
            <div></div>
          </a>
    
          <a
            href="https://www.google.com.br/maps/place/R.+Jorn.+Augusto+Waldrigues,+286+-+Cidade+Industrial+de+Curitiba,+Curitiba+-+PR,+81460-238/@-25.5322441,-49.3399249,17z/data=!3m1!4b1!4m5!3m4!1s0x94dcfd16367ce9c3:0x2a499b71456d49bb!8m2!3d-25.532249!4d-49.3377362"
            target={"_blank"}
          >
            <div></div>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-between align-items-start w-100">
          <div>© Salão Elegances</div>
          <div>81460-238 Curitiba, PR</div>
        </div>
      </div>
    </>
  );
}
