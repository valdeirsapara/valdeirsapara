import Link from "next/link";
import siteConfig from "@/site-config.json";

export default function NavBar() {
    const contactUrl = siteConfig.general.contact_url;
    
    return (
        <nav className="m-[var(--margin)] mt-[20px] flex justify-between items-center">
            <Link href="/" className="duration-300 cursor-pointer">
                <span className="text-md font-semibold font-mono">Valdeir Sapará</span>
            </Link>
            <ul className="flex justify-between items-center gap-8 font-sans">
                <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/">Home</Link>
                </li>
                    <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/about">About</Link>
                </li>
                <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                hover:border-foreground transition-colors duration-300">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            <Link href={contactUrl}>
                <button className="border-2 border-foreground rounded-xl px-8 py-2 cursor-pointer hover:border-[#008000]
                transition-colors duration-300 group">
                    <span className="font-mono group-hover:text-[#008000] transition-colors duration-300">fale conosco</span>
                </button>
            </Link>
        </nav>
    )
}