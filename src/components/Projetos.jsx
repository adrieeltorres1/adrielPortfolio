import perfilLinks from '/img/perfilLinks.png';
import fakeStore from '/img/fakeStore.png';
import pptGerenciador from '/img/pptGerenciador.png';
import { GoLinkExternal } from "react-icons/go";

const Projetos = () => {
    return (
        <>
            <h2 className="flex justify-center font-semibold text-4xl text-white mt-8 px-4">Meus projetos</h2>
            <div className="flex justify-center flex-wrap mt-8 mb-8 px-4 gap-4">
                <div
                    className="
                projetoCard
                animate__animated
                w-full max-w-xs 
                sm:max-w-sm 
                bg-[#212121] 
                rounded-lg 
                shadow-lg    
                transition-transform 
                duration-300 
                hover:scale-105
                border-b-[3px] 
                border-verde-spotify
                " >
                    <a
                        href="https://perfil-links.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4">
                        <img
                            src={perfilLinks}
                            alt="Linktree"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </a>
                    <div className="px-4 pb-4 flex justify-between items-center">
                        <p className="text-white text-sm tracking-wide font-semibold">
                            LINKTREE
                        </p>
                        <a href="https://perfil-links.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <GoLinkExternal className="text-verde-spotify text-xl font-bold" />
                        </a>
                    </div>
                </div>
                <div
                    className="
                projetoCard
                animate__animated
                w-full max-w-xs 
                sm:max-w-sm 
                bg-[#212121] 
                rounded-lg 
                shadow-lg    
                transition-transform 
                duration-300 
                hover:scale-105
                border-b-[3px] 
                border-verde-spotify
                " >
                    <a
                        href="https://fake-store-cyan-seven.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4">
                        <img
                            src={fakeStore}
                            alt="Linktree"
                            className="w-full object-cover rounded-md"
                        />
                    </a>
                    <div className="px-4 pb-4 flex justify-between items-center">
                        <p className="text-white text-sm tracking-wide font-semibold">
                            FAKESTORE
                        </p>
                        <a href="https://fake-store-cyan-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <GoLinkExternal className="text-verde-spotify text-xl font-bold" />
                        </a>
                    </div>
                </div>
                <div
                    className="
                projetoCard
                animate__animated
                w-full max-w-xs 
                sm:max-w-sm 
                bg-[#212121] 
                rounded-lg 
                shadow-lg    
                transition-transform 
                duration-300 
                hover:scale-105
                border-b-[3px] 
                border-verde-spotify
                " >
                    <a
                        href="https://ppt-gerenciador.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 h-48">
                        <img
                            src={pptGerenciador}
                            alt="Linktree"
                            className="w-full h-full object-cover rounded-md"
                        />
                    </a>
                    <div className="px-4 pb-4 flex justify-between items-center">
                        <p className="text-white text-sm tracking-wide font-semibold">
                            GERENCIADOR DE PPT
                        </p>
                        <a href="https://ppt-gerenciador.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <GoLinkExternal className="text-verde-spotify text-xl font-bold" />
                        </a>
                    </div>
                    
                </div>
            </div>            
        </>
    );
}

export default Projetos;