"use client";

import Image from "next/image";
import moiz from "@/app/assets/moiz-pic.png";
import { oswald } from "@/app/fonts";

type HeroBackgroundProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function HeroBackground({
    children,
    className = "",
}: HeroBackgroundProps) {
    return (
        <section
            className={`relative flex min-h-0 flex-1 flex-col overflow-hidden bg-paper ${className}`}
        >
            {/* TITLE — sits behind the portrait, split around a centered gap */}
            <div
                className={`pointer-events-none absolute inset-x-0 top-[9%] z-10 ${oswald.className}`}
                aria-hidden="true"
            >
                <h1
                    className="
            grid select-none grid-cols-[1fr_12vw_1fr]
            text-[14.2vw] font-bold uppercase leading-[0.88]
            tracking-[-0.015em] text-ink
          "
                >
                    <span className="justify-self-end pr-[0.02em]">Moiz</span>
                    <span />
                    <span className="justify-self-start pl-[0.02em]">
                        Latif<span className="text-accent">.</span>
                    </span>
                </h1>
            </div>
            <h1 className="sr-only">Moiz Latif</h1>

            {/* PORTRAIT — in front of the title, anchored to the bottom */}
            <div className="pointer-events-none absolute inset-0 z-20">
                <div className="absolute bottom-0 left-1/2 h-full w-[min(62vw,820px)] -translate-x-1/2">
                    <Image
                        src={moiz}
                        alt="Moiz Latif"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 62vw"
                        className="object-contain object-bottom"
                    />
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-30 flex-1">{children}</div>
        </section>
    );
}