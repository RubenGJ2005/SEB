import Link from "next/link";

async function getCurrentYear(){
    'use cache';
    return new Date().getFullYear();
}

export default function Footer(){
    return(
        <footer className="bg-gray-50 border-t border-gray-200 py-4 px-6 text-center text text-2xl text-gray-500">
            <div className="flex flex-col items-center">

        <p className="text-sm text-zinc-600">
            © Servicios Bibliotecarios. Todos los derechos reservados. ({getCurrentYear()})
        </p>
        <nav className="mt-2 flex space-x-10">
            <Link href="/about" className="text-gray-500 hover:text-gray-400">
            Privacidad
            </Link> 
            <Link href="/contact" className="text-gray-500 hover:text-gray-400">
            Terminos
            </Link>
            <Link href="/pricing" className="text-gray-500 hover:text-gray-400">
            Contacto
            </Link>
        </nav>
        </div>
        </footer>
    )
}



