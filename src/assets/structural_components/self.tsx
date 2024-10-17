//React
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// components

interface PannelOneProps {
    article: string;
    article1: string;
}

const PannelOne = ({article, article1}: PannelOneProps) => {

    const [pannelIsVisible, setPannelIsVisible] = useState<boolean>(false);
    const [divOneVisible, setDivOneVisible] = useState<boolean>(false);
    const [divTwoVisible, setDivTwoVisible] = useState<boolean>(false);
    
    const animationStates = () => {
        if (!pannelIsVisible) {
            setDivOneVisible(false);
            setDivTwoVisible(false);
        } else {setDivOneVisible(true)}
    }

    const {ref} = useInView({
        threshold: 0.3,
        onChange: (inView) => {
            setPannelIsVisible(inView)
        }
    })
    

    return (
        <article ref={ref}
                className={`relative flex flex-col md:flex-row w-full h-fit mb-[10vh] self-center justify-between p-4 text-white transition duration-500 ${pannelIsVisible? 'opacity-1': 'opacity-0'}`}
                onTransitionEnd={() => {animationStates()}}>
            <section className="relative flex w-2/3 md:w-1/4 aspect-[6/9] m-2 mb-44 bg-blue-900">
                <div className={`relative flex w-full aspect-square self-center p-4 left-[50%] bg-cyan-600 bg-opacity-60 rounded-lg overflow-x-scroll text-xl ${divOneVisible? 'animate-rush-left': 'opacity-0'}`}
                onAnimationEnd={() => {setDivTwoVisible(true)}}>
                    {article}
                </div>
            </section>
            <img src="./eboulders.jpg" alt="Empire boulders" className="relative flex w-full m-[-12rem] md:max-w-[40%] md:max-h-[35vw] self-center md:-z-10 z-10" />
            <section className="relative flex w-2/3 md:w-1/4 aspect-[6/9] self-end m-2 mt-44 bg-green-900">
                <div className={`relative flex w-full aspect-square self-center p-4 right-[50%] bg-cyan-600 bg-opacity-60 rounded-lg overflow-x-scroll text-xl ${divTwoVisible? 'animate-rush-right': 'opacity-0'}`}>
                    {article1}
                </div>
            </section>
        </article>
    )
}

export default PannelOne

