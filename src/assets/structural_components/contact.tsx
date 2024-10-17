// React

//Components
import ContactForm from "./contact-form";
import Resume from "./resume";

const Contact = () => {


    return(
        <article className="relative flex flex-col md:flex-row w-full h-fit mb-[10vh] justify-around items-center p-5 bg-black">
            <section className="flex mx-1 w-full md:w-[45%] aspect-square mb-5 md:mb-0 items-center bg-green-500">
                <ContactForm />
            </section>
            <section className="flex mx-1 w-full md:w-[45%] max-h-full aspect-[8.5/11] items-center bg-green-500">
                <Resume />
            </section>
        </article>
    )
};

export default Contact; 