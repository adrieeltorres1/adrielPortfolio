import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa6";

const Stack = () => {
    return (
        <>
            <div 
                className="
                flex flex-wrap 
                justify-center gap-4 
                text-white text-4xl 
                sm:gap-6 sm:text-6xl 
                lg:gap-8 lg:text-6xl 
                mb-8">
                <FaHtml5 />
                <FaCss3Alt />
                <IoLogoJavascript />
                <SiTailwindcss />
                <FaReact />
                <FaNodeJs />
                <SiPrisma />
                <BiLogoPostgresql />
                <BiLogoMongodb />
                <FaGitAlt />
            </div>
        </>
    );
}


export default Stack;