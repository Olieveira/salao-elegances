import { useState, useEffect } from "react";

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState([0,0]);

    useEffect(() => {
        setWindowDimensions([window.innerHeight, window.innerWidth]);
        function handleResize() {
            setWindowDimensions([window.innerHeight, window.innerWidth]);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return windowDimensions;
}