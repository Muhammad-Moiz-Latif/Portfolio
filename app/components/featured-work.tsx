'use client'

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import {
    FiArrowDown,
    FiArrowUpRight,
    FiChevronLeft,
    FiChevronRight,
    FiGithub,
    FiX,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import {
    SiTypescript,
    SiRedux,
    SiTailwindcss,
    SiReactquery,
    SiRedis,
    SiPostgresql,
    SiDrizzle,
    SiDocker,
    SiResend,
    SiCloudflare,
    SiPrisma,
    SiStripe,
    SiCloudinary,
    SiJsonwebtokens,
} from "react-icons/si";
import { mono, serif } from "@/app/fonts";

import devflow_thumbnail from "@/app/assets/devflow-05.png";
import devflow_01 from "@/app/assets/devflow-04.png";
import devflow_02 from "@/app/assets/devflow-02.png";
import devflow_03 from "@/app/assets/devflow-03.png";
import devflow_04 from "@/app/assets/devflow-01.png";
import gizmo_thumbnail from "@/app/assets/gizmo-01.png";
import gizmo_01 from "@/app/assets/gizmo-04.png";
import gizmo_02 from "@/app/assets/gizmo-02.png";
import gizmo_03 from "@/app/assets/gizmo-03.png";
import gizmo_04 from "@/app/assets/gizmo-05.png";
import postvault_thumbnail from "@/app/assets/postvault-01.png";
import postvault_01 from "@/app/assets/postvault-03.png";
import postvault_02 from "@/app/assets/postvault-04.png";
import postvault_03 from "@/app/assets/postvault-05.png";
import postvault_04 from "@/app/assets/postvault-02.png";

type Project = {
    number: string;
    name: string;
    category: string;
    description: string;
    stack: string[];
    deployed: string;
    href: string;
    github?: string;
    images: StaticImageData[];
    imageAlt: string;
};

const projects: Project[] = [
    {
        number: "01",
        name: "DevFlow",
        category: "Collaborative Project Management",
        description:
            "A real-time workspace for teams to plan, organize, and move work forward together.",
        stack: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Zustand",
            "Tailwind CSS",
            "React Query",
            "WebSockets",
            "Redis",
            "PostgreSQL",
            "Drizzle ORM",
            "Docker",
            "BullMQ",
            "Resend",
            "Cloudflare",
        ],
        deployed: "Frontend on Vercel · Backend on Render",
        href: "https://dev-flow-brown.vercel.app",
        github: "https://github.com/Muhammad-Moiz-Latif/DevFlow",
        images: [devflow_thumbnail, devflow_01, devflow_02, devflow_03, devflow_04],
        imageAlt: "DevFlow sprint board with tasks across workspace columns",
    },
    {
        number: "02",
        name: "Gizmo",
        category: "Commerce",
        description:
            "A full-stack commerce experience with payments, authentication, media, and administration built around it.",
        stack: [
            "React",
            "Redux Toolkit",
            "JWT",
            "REST APIs",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "Cloudinary",
        ],
        deployed: "Frontend on Vercel · Backend on Railway",
        href: "https://gizmo-jb17.vercel.app",
        github: "https://github.com/Muhammad-Moiz-Latif/Gizmo",
        images: [gizmo_thumbnail, gizmo_01, gizmo_02, gizmo_03, gizmo_04],
        imageAlt: "Gizmo storefront showing the product catalog",
    },
    {
        number: "03",
        name: "PostVault",
        category: "Publishing / Community",
        description:
            "A publishing platform built around writing, discovery, interaction, and the systems that support them.",
        stack: [
            "React",
            "TypeScript",
            "Redux Toolkit",
            "Tailwind CSS",
            "REST APIs",
            "PostgreSQL",
            "Cloudflare",
            "Nodemailer",
            "Prisma",
        ],
        deployed: "Frontend on Vercel · Backend on Render",
        href: "https://v0-postvault.vercel.app",
        github: "https://github.com/Muhammad-Moiz-Latif/postvault",
        images: [
            postvault_thumbnail,
            postvault_01,
            postvault_02,
            postvault_03,
            postvault_04
        ],
        imageAlt: "PostVault article page in the publishing platform",
    },
];

const techIcons: Record<string, IconType> = {
    React: FaReact,
    TypeScript: SiTypescript,
    "Redux Toolkit": SiRedux,
    "Tailwind CSS": SiTailwindcss,
    "React Query": SiReactquery,
    Redis: SiRedis,
    PostgreSQL: SiPostgresql,
    "Drizzle ORM": SiDrizzle,
    Docker: SiDocker,
    Resend: SiResend,
    Cloudflare: SiCloudflare,
    Prisma: SiPrisma,
    Stripe: SiStripe,
    Cloudinary: SiCloudinary,
    JWT: SiJsonwebtokens,
};

const themes = {
    dark: {
        section: "bg-ink text-paper",
        rule: "border-paper/15",
        body: "text-paper/60",
        soft: "text-paper/45",
        faint: "text-paper/35",
        chip: "text-paper/55 hover:text-paper",
        chipIcon: "text-paper/35",
        frame: "border-paper/15",
        cta: "border-paper/30",
    },
    light: {
        section: "bg-paper text-ink",
        rule: "border-ink/15",
        body: "text-ink/65",
        soft: "text-ink/50",
        faint: "text-ink/40",
        chip: "text-ink/60 hover:text-ink",
        chipIcon: "text-ink/40",
        frame: "border-ink/15",
        cta: "border-ink/30",
    },
} as const;

/* ------------------------------------------------------------------ */
/*  Project visual — carousel + lightbox (same behaviour as before)   */
/* ------------------------------------------------------------------ */

function ProjectVisual({
    project,
    theme,
}: {
    project: Project;
    theme: (typeof themes)[keyof typeof themes];
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const images = project.images ?? [];
    const hasImages = images.length > 0;
    const hasMultiple = images.length > 1;

    const goPrev = () =>
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    const goNext = () =>
        setActiveIndex((prev) => (prev + 1) % images.length);

    useEffect(() => {
        if (!lightboxOpen) return;

        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (!hasMultiple) return;
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "ArrowRight") goNext();
        };

        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = original;
            window.removeEventListener("keydown", onKey);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lightboxOpen, hasMultiple, images.length]);

    if (!hasImages) {
        return (
            <div
                className={`relative flex h-full w-full flex-col justify-between overflow-hidden border ${theme.frame} bg-current/[0.04] p-7 sm:p-10`}
            >
                <span
                    className={`${mono.className} text-[8px] uppercase tracking-[0.2em] ${theme.faint}`}
                >
                    {project.category}
                </span>

                <span
                    className={`${serif.className} block text-[clamp(4rem,11vw,9rem)] leading-[0.75] tracking-[-0.06em] opacity-[0.08]`}
                >
                    {project.name}
                </span>
            </div>
        );
    }

    return (
        <>
            <div
                className={`relative h-full w-full overflow-hidden border ${theme.frame} shadow-[0_35px_100px_-35px_rgba(0,0,0,0.5)]`}
            >
                {/* Clickable layer — opens the lightbox */}
                <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    aria-label={`Open ${project.name} image ${activeIndex + 1} in full view`}
                    className="absolute inset-0 z-0 cursor-zoom-in"
                >
                    <span className="sr-only">Enlarge image</span>
                </button>

                <div className="pointer-events-none absolute inset-0">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className={`absolute inset-0 transition-opacity duration-500 ease-out ${idx === activeIndex ? "opacity-100" : "opacity-0"
                                }`}
                            aria-hidden={idx !== activeIndex}
                        >
                            <Image
                                src={img}
                                alt={`${project.imageAlt} — view ${idx + 1}`}
                                fill
                                sizes="(min-width: 1280px) 62vw, (min-width: 1024px) 58vw, 100vw"
                                className="object-cover object-center"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom gradient for indicator legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />

                {/* Side arrows */}
                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                goPrev();
                            }}
                            aria-label="Previous image"
                            className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:border-white/70 hover:bg-black/60 hover:text-white sm:left-4"
                        >
                            <FiChevronLeft className="text-base" />
                        </button>

                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                goNext();
                            }}
                            aria-label="Next image"
                            className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-all hover:border-white/70 hover:bg-black/60 hover:text-white sm:right-4"
                        >
                            <FiChevronRight className="text-base" />
                        </button>
                    </>
                )}

                {/* Indicators */}
                {hasMultiple && (
                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 pb-4">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveIndex(idx);
                                }}
                                aria-label={`Go to image ${idx + 1}`}
                                className={`h-[3px] rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? "w-6 bg-white"
                                    : "w-3 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${project.name} enlarged view`}
                    onClick={() => setLightboxOpen(false)}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
                >
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxOpen(false);
                        }}
                        aria-label="Close enlarged view"
                        className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-colors hover:border-white/70 hover:bg-black/60 hover:text-white sm:right-6 sm:top-6"
                    >
                        <FiX className="text-lg" />
                    </button>

                    {hasMultiple && (
                        <>
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goPrev();
                                }}
                                aria-label="Previous image"
                                className="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-colors hover:border-white/70 hover:bg-black/60 hover:text-white sm:left-6"
                            >
                                <FiChevronLeft className="text-lg" />
                            </button>

                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    goNext();
                                }}
                                aria-label="Next image"
                                className="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/85 backdrop-blur-md transition-colors hover:border-white/70 hover:bg-black/60 hover:text-white sm:right-6"
                            >
                                <FiChevronRight className="text-lg" />
                            </button>
                        </>
                    )}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-h-[88vh] w-full max-w-[1400px]"
                    >
                        <div className="relative aspect-[2600/1200] w-full overflow-hidden border border-white/15 shadow-[0_35px_120px_-30px_rgba(0,0,0,0.9)]">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-500 ease-out ${idx === activeIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                        }`}
                                    aria-hidden={idx !== activeIndex}
                                >
                                    <Image
                                        src={img}
                                        alt={`${project.imageAlt} — enlarged view ${idx + 1}`}
                                        fill
                                        sizes="100vw"
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>

                        {hasMultiple && (
                            <div className="mt-4 flex items-center justify-center gap-2">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setActiveIndex(idx);
                                        }}
                                        aria-label={`Go to image ${idx + 1}`}
                                        className={`h-[3px] rounded-full transition-all duration-300 ${idx === activeIndex
                                            ? "w-6 bg-white"
                                            : "w-3 bg-white/40 hover:bg-white/70"
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

/* ------------------------------------------------------------------ */
/*  Work                                                               */
/* ------------------------------------------------------------------ */

export default function Work() {
    const total = String(projects.length).padStart(2, "0");

    return (
        <div id="projects">
            {projects.map((project, i) => {
                const t = themes[i % 2 === 0 ? "dark" : "light"];
                const flip = i % 2 === 1;
                const next = projects[i + 1];

                return (
                    <section
                        key={project.number}
                        id={`project-${i + 1}`}
                        className={`relative min-h-dvh overflow-hidden ${t.section}`}
                    >
                        <div className="mx-auto flex min-h-dvh w-full max-w-[1600px] flex-col px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
                            {/* HEADER */}
                            <header
                                className={`flex shrink-0 items-center justify-between border-b pb-4 ${t.rule}`}
                            >
                                <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                                    03 / Selected work
                                </span>

                                <span
                                    className={`${mono.className} text-[9px] uppercase tracking-[0.25em] ${t.faint}`}
                                >
                                    Project {project.number} / {total}
                                </span>
                            </header>

                            {/* PROJECT */}
                            <div
                                className={`
                                    grid min-h-0 flex-1
                                    items-stretch
                                    gap-10
                                    py-8
                                    lg:gap-14
                                    lg:py-10
                                    ${flip
                                        ? "lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.42fr)]"
                                        : "lg:grid-cols-[minmax(280px,0.42fr)_minmax(0,1fr)]"
                                    }
                                `}
                            >
                                {/* CONTENT */}
                                <div
                                    className={`
                                        flex min-h-0 flex-col
                                        ${flip ? "lg:order-2" : "lg:order-1"}
                                    `}
                                >
                                    {/* TOP */}
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`${mono.className} text-[9px] text-accent`}
                                            >
                                                {project.number}
                                            </span>

                                            <span
                                                className={`
                                                    text-[9px]
                                                    uppercase
                                                    tracking-[0.18em]
                                                    ${t.soft}
                                                `}
                                            >
                                                {project.category}
                                            </span>
                                        </div>

                                        <h2
                                            className={`
                                                ${serif.className}
                                                mt-4
                                                text-[clamp(3rem,5vw,6rem)]
                                                leading-[0.82]
                                                tracking-[-0.055em]
                                            `}
                                        >
                                            {project.name}
                                            <span className="text-accent">.</span>
                                        </h2>

                                        <p
                                            className={`
                                                mt-6
                                                max-w-[330px]
                                                text-[13px]
                                                leading-5
                                                lg:text-sm
                                                lg:leading-6
                                                ${t.body}
                                            `}
                                        >
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* BOTTOM */}
                                    <div className="mt-auto">
                                        {/* TECHNOLOGIES */}
                                        <ul
                                            className="
                                                grid max-w-[350px]
                                                grid-cols-2
                                                gap-x-5
                                                gap-y-2.5
                                            "
                                        >
                                            {project.stack.map((tech) => {
                                                const Icon = techIcons[tech];

                                                return (
                                                    <li
                                                        key={tech}
                                                        className={`
                                                            group/tech
                                                            flex
                                                            items-center
                                                            gap-1.5
                                                            text-[9px]
                                                            font-medium
                                                            uppercase
                                                            tracking-[0.07em]
                                                            ${t.chip}
                                                        `}
                                                    >
                                                        <span
                                                            className="
                                                                flex
                                                                size-3.5
                                                                shrink-0
                                                                items-center
                                                                justify-center
                                                            "
                                                        >
                                                            {Icon ? (
                                                                <Icon
                                                                    className={`
                                                                        text-[12px]
                                                                        ${t.chipIcon}
                                                                        transition-colors
                                                                        duration-300
                                                                        group-hover/tech:text-accent
                                                                    `}
                                                                />
                                                            ) : (
                                                                <span
                                                                    className="
                                                                        size-1
                                                                        rounded-full
                                                                        bg-current
                                                                        opacity-30
                                                                    "
                                                                />
                                                            )}
                                                        </span>

                                                        <span>{tech}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        {/* CTA */}
                                        <div
                                            className={`mt-6 flex flex-wrap items-center gap-3 border-t pt-5 ${t.rule}`}
                                        >
                                            {project.href && (
                                                <a
                                                    href={project.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex h-9 items-center gap-4 rounded-full bg-accent pl-4 pr-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-paper"
                                                >
                                                    <span>View live</span>
                                                    <span className="flex size-7 items-center justify-center rounded-full bg-paper text-accent transition-transform duration-300 group-hover:rotate-45">
                                                        <FiArrowUpRight />
                                                    </span>
                                                </a>
                                            )}

                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`group flex h-9 items-center gap-2 rounded-full border px-4 text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent ${t.cta}`}
                                                >
                                                    <FiGithub />
                                                    <span>Source</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* IMAGE — carousel + lightbox */}
                                <div
                                    className={`
                                        relative
                                        w-full
                                        min-w-0
                                        self-center
                                        aspect-[2600/1200]
                                        ${flip ? "lg:order-1" : "lg:order-2"}
                                    `}
                                >
                                    <ProjectVisual project={project} theme={t} />
                                </div>
                            </div>

                            {/* FOOTER */}
                            <footer
                                className={`
                                    flex shrink-0 items-center
                                    justify-between
                                    border-t pt-4
                                    ${t.rule}
                                `}
                            >
                                <span
                                    className={`
                                        ${mono.className}
                                        text-[8px]
                                        uppercase
                                        tracking-[0.2em]
                                        ${t.faint}
                                    `}
                                >
                                    {project.deployed}
                                </span>

                                {next ? (
                                    <a
                                        href={`#project-${i + 2}`}
                                        className="
                                            group
                                            flex items-center gap-2
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            transition-colors
                                            hover:text-accent
                                        "
                                    >
                                        Next · {next.name}

                                        <FiArrowDown
                                            className="
                                                transition-transform
                                                group-hover:translate-y-0.5
                                            "
                                        />
                                    </a>
                                ) : (
                                    <a
                                        href="#"
                                        className="
                                            group
                                            flex items-center gap-2
                                            text-[8px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            transition-colors
                                            hover:text-accent
                                        "
                                    >
                                        View all work

                                        <FiArrowUpRight
                                            className="
                                                transition-transform
                                                group-hover:-translate-y-0.5
                                                group-hover:translate-x-0.5
                                            "
                                        />
                                    </a>
                                )}
                            </footer>
                        </div>
                    </section>
                );
            })}
        </div>
    );
}