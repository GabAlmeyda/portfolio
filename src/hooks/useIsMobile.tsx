import { useEffect, useState } from "react";

/**
 * A custom React hook that returns a boolean value, indicating whether
 * the current viewport width is smaller than the passed breakpoint.
 * 
 * @param {number} breakpoint - The maximum width (in pixels) to consider
 * the screen as "mobile".
 * 
 * @returns {boolean} `true` if the screen width is smaller than the
 * breakpoint, `false` otherwise.
 */
function useIsMobile(breakpoint: number = 768): boolean {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" ? window.innerWidth < breakpoint : false
    )

    useEffect(() => {
        const callback = () => {
            setIsMobile(window.innerWidth < breakpoint);
        }

        window.addEventListener("resize", callback);
        callback();

        return () => window.removeEventListener("resize", callback);
    }, [breakpoint]);

    return isMobile;
}

export default useIsMobile;