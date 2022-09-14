import { useEffect, useState } from "react";
import useWindowDimensions from "../pages/useWindowDimensions";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu() {

  const [empresaY, setEmpresaY] = useState(0);
  const [servicosY, setServicosY] = useState(0);
  useEffect(() => {
    let aboutContent = document.getElementById("about");
    let serviceContent = document.getElementById("service");
    setEmpresaY(aboutContent.getBoundingClientRect().y);
    setServicosY(serviceContent.getBoundingClientRect().y);
  });
  const [height, width] = useWindowDimensions();

  return (
    <>
      {width > 750 ? (
        <MenuDesktop empresaY={empresaY} servicosY={servicosY} />
      ) : (
        <MenuMobile empresaY={empresaY} servicosY={servicosY} />
      )}
    </>
  );
}
