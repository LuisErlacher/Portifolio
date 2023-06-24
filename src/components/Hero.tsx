import {HiDonwload} from "react-icons/hi";

export function Hero() {
    return (
        < >
        <section className="bg-gradient-to-tr from-black to-gray-900 text-white">
            <div className="container mx-auto">
                <h1 className="mb-6" >
                    <span className="font-handwriting block text-3xl">Ola, me chamo</span>
                    <span className="font-headline text-5xl font-semibold">Luis</span>
                    <span className="font-headline text-5xl font-light text-blue-400"> Paulo</span>
                </h1>
                <h2 className="font-semibold flex items-center gap-2">
                    <div className="h-1 w-12 rounded-full bg-blue-800"></div>
                    Desenvolvedor React.js Front-End</h2>
                    <p className="text-gray-600">
                       Sou um desenvolvedor front-end que ama criar coisas para a web. Atualmente trabalho como freelancer e transformo ideias em sites e aplicaçoes web. 
                    </p>

                    <div className="flex items-center gap-2">
                        <a href="#" className="font-bold underline text-white">Fale Comigo</a>
                        <span className="italic text-gray-500">ou</span>
                        <a href="#" className="button text-gray-600 hover:text-gray-900 ">Baixe meu CV</a>
                            <HiDonwload />
                    </div>
            </div>
        </section>
        < />
    )
}