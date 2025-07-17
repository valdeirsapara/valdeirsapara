import HeaderBar from "@/components/HeaderBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-stone-100 dark:bg-stone-900">
            <HeaderBar/>   
            <main className="pt-26">
                {children}
            </main>
            <footer className="bg-stone-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="hover:text-stone-300">GitHub</a>
                    <a href="#" className="hover:text-stone-300">LinkedIn</a>
                    <a href="#" className="hover:text-stone-300">Twitter</a>
                </div>
            </footer>
        </div>
    );
    }