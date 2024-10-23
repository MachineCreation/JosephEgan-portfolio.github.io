// React
import { useState } from "react";
import { useInView } from "react-intersection-observer";

//components
import Carousel from "./carousel";

interface PannelTwoProps {
    article2: string;
}

const PannelTwo = ({article2}: PannelTwoProps) => {

    const [pannelIsVisible, setPannelIsVisible] = useState<Boolean>(false);
    const [textBox, setTextBox] = useState<boolean>(false);
    const [caroselBox, setCaroselBox] = useState<boolean>(false);
    const [radarBox, setRadarBox] = useState<boolean>(false);

    const resetAnimation = () => {
        if (!pannelIsVisible) {
            setTextBox(false);
            setCaroselBox(false);
            setRadarBox(false);
        } else {
            setTextBox(true);
        }
    }

    const {ref} = useInView({
        threshold: 0.11,
        onChange: (InView) => {
            setPannelIsVisible(InView)
        }
    })

    return (
        <div 
            id="Projects"
            className="relative block w-full h-fit mb-[10vh]"
            ref={ref}>
            <article className={`relative flex h-fit w-full p-3 ${pannelIsVisible? 'animate-roll-in': 'animate-fade-out-0.75'}`}
                    style={{ opacity: pannelIsVisible ? 1 : 0 }}
                    onAnimationEnd={() => {resetAnimation()}}>
                <div className=" flex flex-col md:flex-row h-full w-full p-4 justify-between md:bg-blue-400 opacity-80">
                    <section className={`relative flex flex-col w-full md:w-[30%] aspect-[3/4] max-h-screen p-4 my-2 md:my-0 justify-end bg-[url('/etower.jpg')] bg-cover rounded-xl ${textBox? 'animate-rush-right': 'opacity-0'}`}
                            onAnimationEnd={() => {setRadarBox(true)}}>
                        <p className="flex p-3 bg-slate-900 bg-opacity-40 self-end rounded-lg">
                            Eifel Tower, Paris, France, 2022
                        </p>
                    </section>
                    <section className={`relative flex w-full md:w-[30%] aspect-[3/4] max-h-screen p-4 my-2 md:my-0 justify-center bg-green-500 rounded-xl ${radarBox? 'animate-rush-right': 'opacity-0'}`}
                            onAnimationEnd={() => {setCaroselBox(true)}}>
                        <div className="flex w-full p-3 h-fit max-h-[75%] bg-slate-900 bg-opacity-40 self-center rounded-lg">
                            <p className="flex text-lg overflow-y-scroll">
                                {article2}
                            </p>
                        </div>
                    </section>
                    <section className={`relative flex w-full md:w-[30%] aspect-[3/4] max-h-screen p-4 my-2 md:my-0 bg-purple-700 rounded-xl ${caroselBox? 'animate-rush-right': 'opacity-0'}`}>
                        <Carousel />
                    </section>
                </div>
            </article>
        </div>
    )
};

export default PannelTwo