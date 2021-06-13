import { useEffect, useState } from "react";

interface IScreenSize {
        width?: number;
}

export const ScreenSize = () => {
        const [innerWidth, setInnerWidth] = useState(600);
        useEffect(() => {
                function handleResize() {
                        setInnerWidth(window.innerWidth);
                }
                window.addEventListener("resize", handleResize);
        });
        return innerWidth;
};
