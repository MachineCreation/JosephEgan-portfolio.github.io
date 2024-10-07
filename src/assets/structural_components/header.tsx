//React
import { useState } from "react";

//components
import NavMenu from "./navMenu";

//functions

const Header = () => {
    const [menuIsVisable, setMenuIsVisable] = useState<boolean | null>(null)

    return (
        <header className="fixed top-0 p-2">
            <div className="relative aspect-square w-[5rem] animate-horizontal-flip preserve-3d"
                onClick={() => {setMenuIsVisable(!menuIsVisable)}}>
                <img id="icon-pos" 
                    src="icon-pos.png" 
                    alt="Joe head icon"
                    className="absolute w-full bg-white rounded-full backface-hidden" />
                <img id="icon-neg" 
                    src="icon-neg.png" 
                    alt="Joe head icon negetive"
                    className="absolute w-full bg-purple-600 rounded-full rotate-180 translate-z-1"
                    />
            </div>
            <NavMenu isVisible={menuIsVisable} duration={500}/>
            
        </header>
    )
}

export default Header;