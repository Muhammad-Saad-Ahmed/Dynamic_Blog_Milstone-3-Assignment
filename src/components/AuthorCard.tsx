import Link from "next/dist/client/link";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa6";


export default function AuthorCard() {

    return (
        <div className="bg-white shadow-lg rounded-lg ">
            <div className="flex p-5 items-center ">
                <img className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
                    src="../Images/blog1.png"
                    alt="Author Name" />
                <div>
                    <h3 className="text-xl font-bold">Muhammad Saad Ahmed</h3>
                    <p className="text-slate-500"> WebDevolper and UI/UX </p>
                </div>

            </div>


            <p className=" ml-6 text-black leading-relaxed">
                Muhammad Saad Ahmed is a student of Governor Sindh IT Intiative and HTML CSS and NextJs Web Devloper.
            </p>
            <div className="flex gap-5 p-2 ml-6">
                <Link href="#"><FaGithub /></Link>
                <Link href="#"><FaTwitter /></Link>
                <Link href="#"><FaFacebookF /></Link>

            </div>
        </div>
    )
}