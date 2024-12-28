'use client'
import Link from "next/dist/client/link";
import { useEffect, useState } from "react"

export default function Navbar() {

    const [CurrentDateTime, setCurrentDateTime] = useState(``);

    useEffect(() => {
        const UpdateDateTime = () => {
            const Now = new Date();
            const Options: Intl.DateTimeFormatOptions = {
                weekday: 'short',
                year: 'numeric',
                month: 'long',
                day: 'numeric',

                hour12: false
            }
            setCurrentDateTime(Now.toLocaleDateString('en-Us', Options) + '   at      ' + Now.toLocaleTimeString('en-Us', { hour12: false }));
        }
        UpdateDateTime();

        const intervalid = setInterval(UpdateDateTime, 1000);
        return () => clearInterval(intervalid)
    }, []);

    return (
        <header className="text-grey-400 body-font shadow-lg ">
            <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                <div className="flex-1 text-black">
                    <span>{CurrentDateTime}</span>
                </div>
                <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
                    <Link href="http://localhost:3000" className="mr-5  hover:text-red-500 transition-colors duration-300 transform hover:scale-105"> {`  `}Home{`  `}</Link>
                    <Link href="http://localhost:3000/about" className="mr-5  hover:text-red-500 transition-colors duration-300 transform hover:scale-105"> {`  `}About{`  `}</Link>
                    <Link href="http://localhost:3000/contact" className="mr-5  hover:text-red-500 transition-colors duration-300 transform hover:scale-105"> {`  `}Contact{`  `}</Link>
                    <Link href="http://localhost:3000/blog" className="mr-5  hover:text-red-500 transition-colors duration-300 transform hover:scale-105"> {`  `}Blog{`  `}</Link>
                </nav>
                <button className="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 rounded text-white mt-4 md:mt-0 transition-colors duration-300   ">YouTube
                    <svg
                    fill = 'none'
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7 "/>

                    </svg>
                </button>


            </div>
        </header>


    )

}

