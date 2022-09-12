import MenuDesktop from "./MenuDesktop.js";
import MenuMobile from "./MenuMobile.js";
import useWindowDimensions from "../pages/useWindowDimensions.js";

function ResponsiveMenu(){
    const [height, width] = useWindowDimensions();
    
    if (width > 750){
        return <MenuDesktop/>
    }else{
        return <MenuMobile/>
    };
};

export default ResponsiveMenu;