import useWindowDimensions from "../pages/useWindowDimensions";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

export default function Menu() {
  const [height, width] = useWindowDimensions();

  return <>{width > 750 ? <MenuDesktop /> : <MenuMobile />}</>;
}
