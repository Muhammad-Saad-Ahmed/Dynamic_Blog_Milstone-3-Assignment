import React from "react"
export default function Feature (){

    return (
        <div>
            <section className="py-8 bg-neutral-100 mb-40">
                <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-150 ease-in-out
                transform hover:translate-y-[-5px] hover:text-red text-red-600">
                    Welcome to "Code & Audit Chronicles", where tech meets precision!
                </h2>
                <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
                Welcome to my blog! My name is Muhammad Saad Ahmed, and I’m a student at GIAIC with a passion for continuous learning and growth. My journey combines creativity and precision as I delve into web development, working with technologies like HTML, CSS, Tailwind, and Next.js. Alongside my tech interests, I’ve gained valuable professional experience in the accounting field, specializing in auditing.<br/>
                This blog is a space where I share my insights, experiences, and the knowledge I’ve gained throughout my journey. Whether it’s crafting efficient and visually appealing web solutions or exploring the nuances of auditing, my aim is to create content that inspires and informs. With a knack for quick learning and adapting to new challenges, I am excited to offer a mix of technical guides, personal reflections, and tips for both web development and finance enthusiasts.
                </p>

                <div className="mx-auto max-w-7xl px-5">
                    <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change"> Explor Our Category</h1>


                    <div className="grid gride-cols-2 gap-6 sm:grid-cols-3 lg-grid-cols-6 animate-fade-in-up delay-100">
                        {[
                            "Technologies",
                            "Artificial Intelligence",
                            "HTML",
                            "Automate Operation",
                            "TailWind CSS",
                            "NextJs"
                        ].map((category, index) =>(
                        <div key={index}
                        className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600 ">
                            <p className="text-center text-lg font-semibold">{category}</p>
                            <div className="absolute inset-0 border-2  border-transparent"></div>
                        </div>
                        )) }

                    </div>
                </div>
                
                <p className="text-sm md-text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
                Thank you for visiting my blog! I’m thrilled to share my journey and connect with like-minded individuals. Whether you’re here to learn something new, explore ideas, or simply stay inspired, I hope my content resonates with you. Feel free to reach out, share your feedback, or ask questions—let’s grow and achieve together!
                </p>
            </section>
        </div>
    )
}





