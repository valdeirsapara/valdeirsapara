import Canvas from "./canvas";
import Title from "./title";
import "@/assets/css/home/hero/index.css";




export default function Hero() {
    
    return (
        <section className="save-paddings">
            <div className="container-lg flex items-center w-full">
                <div className="flex-1">
                    <Title />
                </div>
                <div className="flex-1">
                    <Canvas/>
                </div>
            </div>
        </section>
    )
}