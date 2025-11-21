"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavbarMobile() {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleLinkClick = () => {
        setIsOpen(false);
    }

    // Previne rolagem do body quando o menu está aberto
    useEffect(() => {
        if (isOpen) {
            // Salva o valor atual do overflow
            const originalOverflow = document.body.style.overflow;
            // Bloqueia a rolagem
            document.body.style.overflow = 'hidden';
            
            // Cleanup: restaura o overflow quando o componente desmontar ou o menu fechar
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        } else {
            // Restaura a rolagem quando o menu fecha
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <> {/* Container */}
            <button className="md:hidden z-100 transition-all duration-300 flex flex-col gap-1 "
                onClick={handleClick}
            >
                <div className={`w-6 h-1 bg-foreground rounded-full z-100 ${isOpen ? "rotate-45 translate-y-2" : ""} transition-all duration-300`}></div>
                <div className={`w-6 h-1 bg-foreground rounded-full z-100 ${isOpen ? "opacity-0" : ""} transition-all duration-300`}></div>
                <div className={`w-6 h-1 bg-foreground rounded-full z-100 ${isOpen ? "-rotate-45 translate-y-[-8px]" : ""} transition-all duration-300`}></div>
            </button>

            <div className={`transition-all duration-300 fixed top-0 left-0 h-full w-full backdrop-blur-lg bg-background/99 ${isOpen ? "block z-50" : "hidden"}`}>
                <div className="h-full">
                    {/* background radial */}
                    <div className="flex justify-center items-center z-99 absolute top-200 right-0 w-[300px] h-[300px] bg-radial-[at_50%_75%] from-[#C0E8F6] to-background/0 blur-3xl opacity-50">

                    </div>
                    <Link href="/" onClick={handleLinkClick} className="duration-300 cursor-pointer absolute top-0 left-0 save-paddings">
                        <span className="text-sm md:text-lg font-semibold font-mono">Valdeir Sapará</span>
                    </Link>
                    <ul className="flex flex-col gap-4 mt-20 text-foreground save-paddings">
                        <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                    hover:border-foreground transition-colors duration-300">
                        <Link href="/web-design" onClick={handleLinkClick}>Design Web</Link>
                    </li>
                        <li className="hover:text-foreground duration-300 border-b-2 border-transparent
                    hover:border-foreground transition-colors duration-300">
                        <Link href="/web-development" onClick={handleLinkClick}>Desenvolvimento Web</Link>
                    </li>
                    </ul>
                </div>
            </div>
        </>
    );
}