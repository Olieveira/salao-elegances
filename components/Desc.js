function Desc() {
  let phoneNumber = 5541984040567;
  let msg = `*Ola*, fui redirecionado(a) do site!\n\n
  *MENSAGEM ENVIADA AUTOMATICAMENTE!*`;

  return (
    <>
      <div
        className="w-100 d-flex flex-column justify-content-center align-items"
        style={{ minHeight: "500px" }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="titulo-desc">
            <h1>ELEGANCES</h1>
          </div>
          <span className="line mb-3 w-25 bottom-shadow" />
          <div className="items-desc px-2 d-flex flex-row flex-wrap justify-content-center align-items-center">
            <p>Salão de Beleza</p>
            <p>Cabeleireiro</p>
            <p>Barbearia</p>
            <p>Manicure</p>
            <p>Pedicure</p>
            <p>Depilação</p>
          </div>
          <div className="p-2 button-desc">
            <a href={`https://wa.me/${phoneNumber}?text=${encodeURI(msg)}`} target='_blank' >ENTRAR EM CONTATO</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Desc;
