import { useEffect, useState } from "react";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu() {
  const [empresaY, setEmpresaY] = useState(0);
  const [servicosY, setServicosY] = useState(0);

  useEffect(() => {
    const aboutContent = document.getElementById("about");
    const serviceContent = document.getElementById("service");
    if (aboutContent && serviceContent) {
      setEmpresaY(aboutContent.getBoundingClientRect().top + window.scrollY);
      setServicosY(serviceContent.getBoundingClientRect().top + window.scrollY);
    }
  }, []);

  return (
    <>
      <div className="d-none d-md-block">
        <MenuDesktop empresaY={empresaY} servicosY={servicosY} />
      </div>
      <div className="d-block d-md-none">
        <MenuMobile empresaY={empresaY} servicosY={servicosY} />
      </div>
    </>
  );
}
