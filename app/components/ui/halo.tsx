"use client";

import Image from "next/image";
import moiz from "@/app/assets/moiz-pic.png";

type HeroTechHaloProps = {
    children?: React.ReactNode;
    className?: string;
};

export default function HeroTechHalo({
    children,
    className = "",
}: HeroTechHaloProps) {
    return (
        <section
            className={`relative flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-paper ${className}`}
        >
            {/* ATMOSPHERE */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(184_90_60/14%),transparent_31%),radial-gradient(circle_at_50%_50%,transparent_55%,rgb(33_33_33/8%)_100%)]" />
            <div className="w-full h-screen absolute flex">
                <div className="bg-paper size-full" />
                <div className="bg-accent size-full" />
                <div className="bg-paper size-full" />

            </div>

            {/* PORTRAIT */}
            <div className="pointer-events-none absolute inset-0 z-20">
                <div className="absolute left-1/2 top-[4%] h-full -translate-x-1/2 md:w-[min(50vw,51rem)]">

                    <div className="absolute inset-0">
                        <Image
                            src={moiz}
                            alt="Moiz Latif"
                            fill
                            priority
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="relative z-30 flex flex-1 flex-col">
                {children}
            </div>
        </section>
    );
}