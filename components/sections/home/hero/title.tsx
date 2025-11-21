"use client";

export default function Title() {
    const words = [
        { text: "Potencialize", blue: false },
        { text: "seu", blue: false },
        { text: "negócio", blue: true },
        { text: "com", blue: false },
        { text: "sistemas", blue: false },
        { text: "e", blue: false },
        { text: "sites", blue: false },
        { text: "desenvolvidos", blue: false },
        { text: "sob", blue: false },
        { text: "medida.", blue: false },
    ];
    
    return (
        <div className="hero-title-wrapper">
            <h2
                className="text-xl md:text-4xl  font-mono flex flex-wrap"
                tabIndex={0}
            >
                {words.map((word, index) => (
                    <span 
                        key={index}
                        className={`word-reveal ${word.blue ? 'blue-to-white' : ''}`}
                        style={{ '--word-index': index } as React.CSSProperties}
                    >
                        {word.text}&nbsp;
                    </span>
                ))}
            </h2>
        </div>
    )
}