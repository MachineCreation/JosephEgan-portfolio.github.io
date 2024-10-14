//React
import { useState } from "react";

//components
import NavMenu from "./navMenu";

//functions

const Header = () => {
    const [menuIsVisable, setMenuIsVisable] = useState<boolean | null>(null)
    const [nameIsVisible, setNameIsVisible] = useState<boolean>(false)

    return (
        <header className={`fixed flex w-screen justify-between top-0 p-2 z-50 transition-all duration-1000 ${nameIsVisible? 'bg-slate-900 bg-opacity-35': ''}`}>
            <div className="relative aspect-square w-[5rem] animate-horizontal-flip preserve-3d"
                onClick={() => {setMenuIsVisable(!menuIsVisable)}}
                onAnimationEnd={() => {setNameIsVisible(true)}}>
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
            <h1 className={`relative text-4xl flex self-center justify-self-end text-yellow-500 ${nameIsVisible? 'animate-rush-right': 'hidden'}`}>Joseph Egan</h1>
            <NavMenu isVisible={menuIsVisable} duration={500}/>
            
        </header>
    )
}

export default Header;