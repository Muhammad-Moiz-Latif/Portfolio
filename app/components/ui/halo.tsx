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
            className={`relative flex h-full min-h-0 flex-1 flex-col overflow-hidden ${className}`}
        >
            {/* Visual layer */}
            <div className="pointer-events-none absolute inset-0 z-10">
                <div className="relative mx-auto h-full w-full max-w-[1000px]">
                    {/* Your image */}
                    <div className="absolute left-1/2 top-[17%] z-60 size-full -translate-x-1/2">
                        <Image
                            src={moiz}
                            alt="Moiz"
                            fill
                            priority
                            className="object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-50 flex flex-1 flex-col p-3">
                {children}
            </div>
        </section>
    );
}