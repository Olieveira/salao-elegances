import { useEffect, useState } from "react";
import useWindowDimensions from "../pages/useWindowDimensions";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu() {
  const [empresaY, setEmpresaY] = useState(0);
  const [servicosY, setServicosY] = useState(0);
  useEffect(() => {
    let aboutContent = document.getElementById('about');
    setEmpresaY(aboutContent.getBoundingClientRect().y)
    console.log(aboutContent.getBoundingClientRect().y) 
  })
  const [height, width] = useWindowDimensions();

  return <>{width > 750 ? <MenuDesktop empresaY={empresaY} servicosY={servicosY} /> : <MenuMobile empresaY={empresaY} servicosY={servicosY} />}</>;
}
