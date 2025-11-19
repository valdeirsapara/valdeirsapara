"use client";
import { Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useState } from "react";

export default function Canvas() {
    const { RiveComponent, rive } = useRive({
        src: "12694-24052-mars-landing-page.riv",
        autoplay: true,
        stateMachines: ["State Machine 1"],
        layout: new Layout({
            fit: Fit.Cover
        }),
        onLoad: () => {
            console.log("Rive carregado!");
        },
        onLoadError: (error) => {
            console.error("Erro ao carregar Rive:", error);
        },
    });
    return (
        <div 
            className="w-full h-full min-h-[720px] max-w-[1200px] flex items-center justify-center relative rounded-lg overflow-hidden"
        >
            {RiveComponent ? (
                <div className="w-full h-full absolute top-0 left-0">
                    <RiveComponent  />
                </div>
            ) : (
                <div>Carregando...</div>
            )}
        </div>
    );
}