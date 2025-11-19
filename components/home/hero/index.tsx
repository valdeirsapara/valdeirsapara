import Canvas from "./canvas";
import Title from "./title";
import "@/assets/css/home/hero/index.css";




export default function Hero() {
    
    return (
        <section className="save-paddings container-lg flex flex-col gap-4 md:gap-0 md:flex-row md:items-center w-full">
                <div className="flex-1">
                    <Title />
                </div>
                <div className="flex-1">
                    <Canvas/>
                </div>  
        </section>
    )
}