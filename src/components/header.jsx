import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center px-4 py-8">
                <div className="fw-full max-w-2xl text-center">
                    <h1 className="flex justify-center text-4xl sm:text-4xl lg:text-6xl text-white text-justify font-bold py-3 ">Adriel Torres</h1>

                    <span className="flex justify-center text-verde-spotify text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl text-justify px-4 sm:px-6 lg:px-8">DESENVOLVEDOR FULLSTACK</span>

                    <div className="flex justify-center gap-6 text-2xl text-white mt-5">
                        <a href="https://www.instagram.com/adrieltorres_/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-verde-spotify">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com/in/adriel-torres-9a421a27b/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-verde-spotify">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:adrieltorres.dev@gmail.com" className="transition-colors hover:text-verde-spotify">
                            <BiLogoGmail />

                        </a>
                        <a href="https://wa.me/5585982001894?text=Iaee%20Adriel%2C%20tudo%20bem%3F" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-verde-spotify">
                            <FaWhatsapp />
                        </a>
                    </div>

                    <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed  text-justify px-4 sm:px-6 lg:px-8 my-5">
                        Eu sou o Adriel😄👍, e gosto de <span className="text-verde-spotify font-semibold">resolver problemas!</span> Me identifico muito com a área de tecnologia, especialmente com o desenvolvimento de software. <span className="text-verde-spotify font-semibold">Sou estudante de Engenharia de Software</span> e estou buscando melhorar a cada dia a minha stack.</p>
                    <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-justify px-4 sm:px-6 lg:px-8 my-5">
                        Gosto de <span className="text-verde-spotify font-semibold">aprender</span> e tenho <span className="text-verde-spotify font-semibold">disposição</span> pra isso, sempre em busca de oportunidades onde eu possa aplicar meus conhecimentos, contribuir com projetos reais e continuar evoluindo na prática.
                    </p>
                    <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed text-justify px-4 sm:px-6 lg:px-8 my-5">
                        Pra mim, ser dev significa ir além de simplesmente só escrever código, é buscar constantemente melhorar e ter o <span className="text-verde-spotify font-semibold">compromisso</span> de entregar <span className="text-verde-spotify font-semibold">resultados</span>. 🚀🎯
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;