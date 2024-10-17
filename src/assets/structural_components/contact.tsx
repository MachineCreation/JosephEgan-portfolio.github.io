// React

const Contact = () => {


    return(
        <article className="relative flex flex-col md:flex-row w-full h-fit mb-[10vh] justify-around items-center p-5 bg-black">
            <section className="flex w-full md:w-[45%] aspect-square mb-5 md:mb-0 bg-red-500">
                <div>Send me an email</div>
            </section>
            <section className="flex w-full md:w-[45%] aspect-[9/12] bg-green-500">
                <div>Download my resume</div>
            </section>
        </article>
    )
};

export default Contact;