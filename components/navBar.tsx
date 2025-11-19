import Link from "next/link";
import siteConfig from "@/site-config.json";

export default function NavBar() {
    const contactUrl = siteConfig.general.contact_url;
    
    return (
        <nav className="save-paddings  absolute top-0 left-0 w-full flex justify-between items-center z-50">
            <Link href="/" className="duration-300 cursor-pointer">
                <span className="text-md font-semibold font-mono">Valdeir Sapará</span>
            </Link>
                <a href="#content" className=" left-50 top-8 text-sm font-sans sr-only focus:not-sr-only
                 focus:bg-white focus:text-black focus:absolute focus:p-[2px] focus:z-50"
                >
                    Ir para conteúdo principal
                </a>
            <ul className="flex justify-between items-center gap-8 font-sans">
                <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/web-design">Design Web</Link>
                </li>
                    <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/web-development">Desenvolvimento Web</Link>
                </li>
                <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/cases">Casos de Sucesso</Link>
                </li>
            </ul>

            <Link href={contactUrl}>
                <button className="border-2 border-foreground rounded-xl px-8 py-2 cursor-pointer hover:border-[#3A9DC2]
                transition-colors duration-300 group flex item-center">
                    <span className="font-mono group-hover:text-[#3A9DC2] transition-colors duration-300 ml-2">fale conosco</span>
                </button>
            </Link>
        </nav>
    )
}