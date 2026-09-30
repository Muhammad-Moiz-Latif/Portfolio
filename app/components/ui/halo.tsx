"use client";

import { useEffect, useRef } from "react";
import type { IconType } from "react-icons";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDocker,
    SiTailwindcss,
    SiPrisma,
    SiGit,
} from "react-icons/si";

type Tech = { name: string; icon: IconType };

const defaultTechnologies: Tech[] = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Redis", icon: SiRedis },
    { name: "Docker", icon: SiDocker },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Prisma", icon: SiPrisma },
    { name: "Git", icon: SiGit },
];

type TechHaloProps = {
    /** Positions the ring's CENTER, e.g. "left-1/2 top-[15%]" */
    className?: string;
    technologies?: Tech[];
    rx?: number; // horizontal radius
    ry?: number; // vertical radius (smaller = flatter)
    iconSize?: number; // px
    speed?: number; // radians per second
    minScale?: number; // icon size on the far side
    minOpacity?: number; // icon opacity on the far side
    showTrack?: boolean; // faint ellipse line
};

export default function TechHalo({
    className = "",
    technologies = defaultTechnologies,
    rx = 210,
    ry = 50,
    iconSize = 44,
    speed = 0.25,
    minScale = 0.55,
    minOpacity = 0.35,
    showTrack = true,
}: TechHaloProps) {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const pausedRef = useRef(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        let angle = 0;
        let last = performance.now();
        let raf = 0;

        const render = () => {
            const count = technologies.length;

            itemRefs.current.forEach((el, i) => {
                if (!el) return;

                const a = angle + (i / count) * Math.PI * 2;
                const x = Math.cos(a) * rx;
                const y = Math.sin(a) * ry;

                // depth: 0 = far/back, 1 = near/front
                const depth = (Math.sin(a) + 1) / 2;
                const scale = minScale + depth * (1 - minScale);
                const opacity = minOpacity + depth * (1 - minOpacity);

                el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
                el.style.opacity = String(opacity);
                // back half goes behind your photo, front half in front
                el.style.zIndex = depth > 0.5 ? "30" : "0";
            });
        };

        const tick = (now: number) => {
            const dt = (now - last) / 1000;
            last = now;
            if (!pausedRef.current && !reduceMotion) angle += speed * dt;
            render();
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [technologies, rx, ry, speed, minScale, minOpacity]);

    return (
        <div
            className={`pointer-events-none absolute left-1/2 top-36 ${className}`}
            style={{ width: 0, height: 0 }}
        >
            {showTrack && (
                <div
                    className="absolute rounded-[50%] border border-white/10"
                    style={{
                        width: rx * 2,
                        height: ry * 2,
                        left: -rx,
                        top: -ry,
                    }}
                />
            )}

            {technologies.map((tech, i) => (
                <div
                    key={tech.name}
                    ref={(el) => {
                        itemRefs.current[i] = el;
                    }}
                    className="pointer-events-auto absolute left-0 top-0 will-change-transform"
                    onMouseEnter={() => (pausedRef.current = true)}
                    onMouseLeave={() => (pausedRef.current = false)}
                >
                    <div
                        className="group relative flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900/90 text-zinc-300 shadow-xl backdrop-blur transition-colors duration-300 hover:border-white/30 hover:text-white"
                        style={{ width: iconSize, height: iconSize }}
                    >
                        <tech.icon className="h-6 w-6" />
                        <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-xs text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
                            {tech.name}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}