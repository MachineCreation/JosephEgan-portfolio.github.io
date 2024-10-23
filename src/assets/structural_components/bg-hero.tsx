// React
import { useState } from "react";

// interface

interface BGheroProps {
    description: string;
    story: string;
    caption: string;
}

const BGhero = (props: BGheroProps) => {

    const [heroIsVisible, setHeroIsVisible] = useState<Boolean>(false);
    const [descriptionvisible, setDescriptionVisible] = useState<boolean>(false)

    return (
        <article 
            id="Home"
            className="relative flex flex-col w-screen min-h-dvh h-fit mb-[10vh] px-10 bg-hero bg-right bg-cover animate-fade-in-4.5 text-white"
            onAnimationEnd={() => {setHeroIsVisible(true);}}>
                <div className="relative flex grow flex-wrap justify-between top-28 md:top-38">
                    <h1 className={`relative flex  max-w-sm h-fit xl:max-w-md m-3 p-4 rounded-lg bg-slate-800 bg-opacity-30 shadow-lg text-2xl ${heroIsVisible? 'animate-fade-in-0.75': 'hidden'}`}
                        onAnimationEnd={() => {setDescriptionVisible(true);}}>
                        {props.description}
                    </h1>
                    <p className={`relativeflex  text-right max-w-sm xl:max-w-md h-fit m-3 p-4 rounded-lg bg-slate-800 bg-opacity-30 shadow-lg text-xl ${ descriptionvisible? 'animate-fade-in-0.75': 'hidden'}`}>
                        {props.story}
                    </p>
                </div>
                <p className="relative flex self-end m-3 p-4 rounded-lg bg-slate-800 bg-opacity-30 shadow-lg">
                    {props.caption}
                </p>
        </article>
    )
}

export default BGhero