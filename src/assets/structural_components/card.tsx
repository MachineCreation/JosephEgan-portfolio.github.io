
// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
    name: string;
    background: string;
    description: string;
    link: string;
}

const Card = ({name, background, description, link}: CardProps) => {

    const [descriptionView, setDescriptionView] = useState<boolean>(false);

    const nav = useNavigate();

    // tripdik image/description/link

    return (
        <article className={`relative flex flex-col w-full h-full`}>
            <section className={`flex grow p-2 rounded-lg bg-black`}>
                <div className="flex grow self-end justify-between align-items-center p-2 rounded-lg text-sm bg-slate-800 bg-opacity-40">
                    <button className="p-2 bg-blue-400"
                            onClick={() => {nav(link)}}>Visit
                    </button>
                    <div className="flex self-center">
                        {name}
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:flex-row w-full self-center justify-between">
                <div className={`flex w-full ${descriptionView? 'h-fit': 'h-fit truncate-paragraph'} px-4 pt-3 pb-1.5 my-2 rounded-lg transition-all duration-500 ease-in-out cursor-pointer`}
                    onClick={() => {setDescriptionView(!descriptionView)}}>
                        {description}
                </div>
            </section>
        </article>
    )
}

export default Card;