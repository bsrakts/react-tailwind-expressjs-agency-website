import { useState } from "react";

export const useNav = () => {
    const [navOpen,setNavOpen] = useState(false);

    return{
        navOpen,
        setNavOpen
    }
}