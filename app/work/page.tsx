'use client'

import type { Metadata } from "next";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { IconType } from "react-icons";
import {
    FiArrowDown,
    FiArrowUpRight,
    FiChevronLeft,
    FiChevronRight,
    FiCheck,
    FiGithub,
    FiX,
} from "react-icons/fi";

import { FaReact } from "react-icons/fa";

import {
    SiTypescript,
    SiRedux,
    SiReactquery,
    SiRedis,
    SiPostgresql,
    SiDrizzle,
    SiDocker,
    SiCloudflare,
    SiPrisma,
    SiStripe,
    SiCloudinary,
    SiJsonwebtokens,
    SiNextdotjs,
    SiShadcnui,
    SiFramer,
    SiMui,
    SiExpress,
    SiVite,
    SiTailwindcss,
    SiRadixui,
    SiReactrouter,
    SiSocketdotio,
} from "react-icons/si";

import { mono, serif } from "@/app/fonts";

import devflow_thumbnail from "@/app/assets/devflow-05.png";
import devflow_01 from "@/app/assets/devflow-04.png";
import devflow_02 from "@/app/assets/devflow-02.png";
import devflow_03 from "@/app/assets/devflow-03.png";
import gizmo_thumbnail from "@/app/assets/gizmo-04.png";
import gizmo_01 from "@/app/assets/gizmo-02.png";
import gizmo_02 from "@/app/assets/gizmo-03.png";
import gizmo_03 from "@/app/assets/gizmo-05.png";
import postvault_thumbnail from "@/app/assets/postvault-02.png";
import postvault_01 from "@/app/assets/postvault-03.png";
import postvault_02 from "@/app/assets/postvault-04.png";
import postvault_03 from "@/app/assets/postvault-05.png";
import axion_thumbnail from "@/app/assets/axion-01.png";
import axion_01 from "@/app/assets/axion-02.png";
import axion_02 from "@/app/assets/axion-03.png";
import axion_03 from "@/app/assets/axion-04.png";
import movielyzer_thumbnail from "@/app/assets/movielyzer_01.png";
import movielyzer_01 from "@/app/assets/movielyzer_02.png";
import movielyzer_02 from "@/app/assets/movielyzer_03.png";
import movielyzer_03 from "@/app/assets/movielyzer_04.png";



const metadata: Metadata = {
    title: "Work — Moiz Latif",
    description:
        "Selected work by Moiz Latif — full-stack systems, real-time applications, commerce platforms and product experiences.",
};

type Project = {
    number: string;
    name: string;
    category: string;
    year: string;

    tagline: string;
    description: string;

    problem: string;

    built: string[];

    engineering: string[];

    stack: string[];

    deployed?: string;

    href?: string;
    github?: string;
    caseStudy?: string;

    images?: StaticImageData[];
    imageAlt: string;

    accentLabel?: string;
};

const projects: Project[] = [
    {
        number: "01",
        name: "DevFlow",
        category: "REAL-TIME COLLABORATION",
        year: "2026",

        tagline:
            "A project management platform where the board behaves like a shared workspace — not a collection of stale browser states.",

        description:
            "A full-stack, multi-tenant project management platform inspired by tools like Linear and Jira, built around real-time collaboration.",

        problem:
            "Traditional project boards become disconnected when several people work at the same time. DevFlow was designed around the idea that every meaningful change — from moving an issue to moving a cursor — should be visible to the rest of the team immediately.",

        built: [
            "Multi-tenant workspaces with member roles and invitations",
            "Kanban boards with issue lifecycle management",
            "Live presence, cursor movement and ghost dragging",
            "Threaded issue comments, labels and priorities",
            "Async notifications and activity processing",
            "Email/password authentication and Google OAuth",
        ],

        engineering: [
            "Socket.io rooms synchronize active project boards across connected clients.",
            "Redis stores shared presence and acts as the pub/sub layer behind horizontally scalable WebSockets.",
            "BullMQ moves notifications and background activity away from the request cycle.",
            "PostgreSQL persists the final source of truth while TanStack Query reconciles client state after real-time updates.",
        ],

        stack: [
            "React",
            "TypeScript",
            "React Query",
            "React Router",
            "Zustand",
            "Socket.io",
            "Redis",
            "BullMQ",
            "PostgreSQL",
            "Drizzle ORM",
            "Docker",
        ],

        deployed: "Frontend on Vercel · Backend on Render",

        href: "https://dev-flow-brown.vercel.app",
        github: "https://github.com/Muhammad-Moiz-Latif/DevFlow",

        images: [devflow_thumbnail, devflow_01, devflow_02, devflow_03],
        imageAlt: "DevFlow real-time project management workspace",

        accentLabel: "REAL-TIME SYSTEM",
    },

    {
        number: "02",
        name: "Gizmo",
        category: "COMMERCE PLATFORM",
        year: "2025",

        tagline:
            "A technology marketplace that carries the complete journey from product discovery to payment — with an operational console behind it.",

        description:
            "A full-stack e-commerce platform for browsing, buying and managing technology products.",

        problem:
            "An e-commerce interface is only one part of the problem. The system also needs authentication, persistent product data, media management, checkout and tools for administrators to operate the marketplace.",

        built: [
            "Responsive product and category browsing",
            "Cart, wishlist and guest shopping flows",
            "Email/password and Google authentication",
            "Stripe-powered checkout",
            "Admin product and category management",
            "User management and approval workflows",
            "Dashboard metrics and Cloudinary media uploads",
        ],

        engineering: [
            "A separate React/Vite client communicates with an Express API rather than coupling storefront concerns to server logic.",
            "PostgreSQL provides the persistent commerce data model through Prisma.",
            "Stripe handles checkout while the backend owns the surrounding order flow.",
            "Cloudinary separates product-media storage from application data.",
        ],

        stack: [
            "React",
            "Redux Toolkit",
            "Vite",
            "JWT",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "Cloudinary",
        ],

        deployed: "Frontend on Vercel · Backend on Railway",

        href: "https://gizmo-jb17.vercel.app",
        github: "https://github.com/Muhammad-Moiz-Latif/Gizmo",

        images: [gizmo_thumbnail, gizmo_01, gizmo_02, gizmo_03],
        imageAlt: "Gizmo technology marketplace storefront",

        accentLabel: "FULL-STACK COMMERCE",
    },

    {
        number: "03",
        name: "PostVault",
        category: "SOCIAL PUBLISHING",
        year: "2025",

        tagline:
            "A publishing platform where writing, discovery and social interaction meet a security-conscious application architecture.",

        description:
            "A full-stack social publishing platform for creating, discovering and interacting with written content.",

        problem:
            "Publishing platforms need more than a post editor. They need identity, content ownership, discovery, social relationships and secure sessions that remain reliable as users move throughout the application.",

        built: [
            "Draft and published post workflows",
            "Rich posts with tags, media and author metadata",
            "Personalized publishing dashboard",
            "Like, comment, save and follow interactions",
            "Discovery pages and tag-based browsing",
            "Email verification and password reset",
            "Google OAuth authentication",
        ],

        engineering: [
            "Short-lived JWT access tokens are paired with refresh tokens for session continuity.",
            "Refresh handling is designed around secure cookies rather than exposing long-lived credentials to application code.",
            "React Query manages server state and keeps post interactions synchronized with cached data.",
            "Protected routes and backend access control separate public discovery from authenticated actions.",
        ],

        stack: [
            "React",
            "TypeScript",
            "React Query",
            "React Router",
            "Redux Toolkit",
            "PostgreSQL",
            "Drizzle ORM",
            "JWT",
            "Cloudflare",
        ],

        deployed: "Frontend on Vercel · Backend on Render",

        href: "https://v0-postvault.vercel.app/auth",
        github: "https://github.com/Muhammad-Moiz-Latif/postvault",

        // Only one image provided so far — duplicate until real screenshots arrive.
        images: [
            postvault_thumbnail,
            postvault_01,
            postvault_02,
            postvault_03,
        ],
        imageAlt: "PostVault social publishing platform",

        accentLabel: "SOCIAL APPLICATION",
    },

    {
        number: "04",
        name: "Axion",
        category: "FITNESS / PRODUCT EXPERIENCE",
        year: "2025",

        tagline:
            "A cinematic fitness experience designed to make performance, coaching and transformation feel measurable.",

        description:
            "A premium fitness and coaching experience focused on personalized programming, measurable progress and high-performance visual storytelling.",

        problem:
            "Fitness products often present information as disconnected features. Axion approaches the experience as a transformation journey — connecting training, nutrition, coaching and accountability through a single visual system.",

        built: [
            "Performance-focused landing experience",
            "Personalized workout positioning",
            "Nutrition guidance and support flows",
            "1-on-1 coaching experience",
            "Fitness challenges and accountability concepts",
            "High-contrast responsive product presentation",
        ],

        engineering: [
            "Next.js provides the application structure and production-ready rendering model.",
            "Reusable components keep the marketing experience modular instead of building each section independently.",
            "Framer Motion is used to make movement part of the brand language rather than decorative animation.",
            "The interface treats typography, spacing, imagery and motion as one cohesive visual system.",
        ],

        stack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
        ],

        href: "#",
        github: "https://github.com/Muhammad-Moiz-Latif/Axion",

        images: [axion_thumbnail, axion_01, axion_02, axion_03],

        imageAlt: "Axion premium fitness experience",

        accentLabel: "PRODUCT DESIGN",
    },

    {
        number: "05",
        name: "Movielyzer",
        category: "AI / VIDEO DISCOVERY",
        year: "2025",

        tagline:
            "An AI-first product interface for searching video content with speed, precision and a stronger sense of discovery.",

        description:
            "A polished frontend experience for an AI-powered video search and discovery product.",

        problem:
            "AI products can easily become technically impressive but visually difficult to understand. Movielyzer focuses on making the product proposition immediately legible through storytelling, interaction and a conversion-ready experience.",

        built: [
            "Product-led landing page and hero experience",
            "AI-first video discovery positioning",
            "Feature storytelling around search and speed",
            "Interactive how-it-works experience",
            "Pricing and conversion sections",
            "Authentication flows",
            "Responsive product experience across screen sizes",
        ],

        engineering: [
            "React and TypeScript provide the component foundation for the product experience.",
            "React Router organizes the multi-page application flow.",
            "Framer Motion drives interactive storytelling and transition design.",
            "The frontend is structured as a product surface ready to connect with a real search backend.",
        ],

        stack: [
            "React",
            "TypeScript",
            "Vite",
            "React Router",
            "Tailwind CSS",
            "Framer Motion",
            "Radix UI",
        ],

        href: "#",
        github: "https://github.com/Muhammad-Moiz-Latif/movielyzer",

        images: [movielyzer_thumbnail, movielyzer_01, movielyzer_02, movielyzer_03],

        imageAlt: "Movielyzer AI video discovery experience",

        accentLabel: "AI PRODUCT UX",
    },
];

const techIcons: Record<string, IconType> = {
    React: FaReact,
    TypeScript: SiTypescript,
    "Redux Toolkit": SiRedux,
    "React Query": SiReactquery,
    Redis: SiRedis,
    PostgreSQL: SiPostgresql,
    "Drizzle ORM": SiDrizzle,
    Docker: SiDocker,
    Cloudflare: SiCloudflare,
    Prisma: SiPrisma,
    Stripe: SiStripe,
    Cloudinary: SiCloudinary,
    JWT: SiJsonwebtokens,
    "Next.js": SiNextdotjs,
    "Radix UI": SiRadixui,
    "Framer Motion": SiFramer,
    "Material UI": SiMui,
    "React Router": SiReactrouter,
    Vite: SiVite,
    "Tailwind CSS": SiTailwindcss,
    Express: SiExpress,
    Shadcn: SiShadcnui,
};

const themes = {
    dark: {
        section: "bg-ink text-paper",
        border: "border-paper/15",
        subtleBorder: "border-paper/10",
        muted: "text-paper/40",
        body: "text-paper/65",
        soft: "text-paper/50",
        panel: "bg-paper/[0.035]",
        panelStrong: "bg-paper/[0.06]",
        tech: "text-paper/55 hover:text-paper",
    },

    light: {
        section: "bg-paper text-ink",
        border: "border-ink/15",
        subtleBorder: "border-ink/10",
        muted: "text-ink/40",
        body: "text-ink/65",
        soft: "text-ink/50",
        panel: "bg-ink/[0.035]",
        panelStrong: "bg-ink/[0.06]",
        tech: "text-ink/55 hover:text-ink",
    },
} as const;

function SectionLabel({
    children,
    muted = false,
}: {
    children: React.ReactNode;
    muted?: boolean;
}) {
    return (
        <p
            className={`${mono.className} text-[8px] font-medium uppercase tracking-[0.24em] ${muted ? "text-current/35" : "text-accent"
                }`}
        >
            {children}
        </p>
    );
}

function TechList({
    stack,
    theme,
}: {
    stack: string[];
    theme: (typeof themes)[keyof typeof themes];
}) {
    return (
        <div className="flex flex-wrap gap-x-5 gap-y-2.5">
            {stack.map((tech) => {
                const Icon = techIcons[tech];

                return (
                    <div
                        key={tech}
                        className={`group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.05em] transition-colors ${theme.tech}`}
                    >
                        <span className="flex size-3.5 items-center justify-center">
                            {Icon ? (
                                <Icon className="text-[11px] opacity-55 transition-opacity group-hover:opacity-100" />
                            ) : (
                                <span className="size-1 rounded-full bg-current opacity-40" />
                            )}
                        </span>

                        {tech}
                    </div>
                );
            })}
        </div>
    );
}

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

    // Lock body scroll while the lightbox is open, and allow Esc to close it.
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
                className={`relative flex aspect-[2600/1200] w-full flex-col justify-between overflow-hidden border ${theme.border} ${theme.panelStrong} p-7 sm:p-10`}
            >
                <div className="flex items-start justify-between">
                    <SectionLabel muted>{project.category}</SectionLabel>

                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] ${theme.muted}`}
                    >
                        Preview
                    </span>
                </div>

                <div>
                    <span
                        className={`${serif.className} block text-[clamp(4rem,11vw,9rem)] leading-[0.75] tracking-[-0.06em] opacity-[0.08]`}
                    >
                        {project.name}
                    </span>

                    <div className="mt-7 flex items-center gap-3">
                        <span className="size-1.5 rounded-full bg-accent" />

                        <span
                            className={`${mono.className} text-[8px] uppercase tracking-[0.2em] ${theme.muted}`}
                        >
                            Visual coming soon
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div
                className={`group relative aspect-[2600/1200] w-full overflow-hidden border ${theme.border} shadow-[0_35px_100px_-35px_rgba(0,0,0,0.45)]`}
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
                            className={`absolute inset-0 transition-opacity duration-500 ease-out ${idx === activeIndex
                                ? "opacity-100"
                                : "opacity-0"
                                }`}
                            aria-hidden={idx !== activeIndex}
                        >
                            <Image
                                src={img}
                                alt={`${project.imageAlt} — view ${idx + 1}`}
                                fill
                                sizes="(min-width: 1024px) 64vw, 100vw"
                                className="object-cover object-center"
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom gradient for indicator legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />

                {/* Side arrows, vertically centered */}
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

                {/* Indicators, centered at the bottom */}
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
                    {/* Close button */}
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

                    {/* Prev / Next inside lightbox */}
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

                    {/* Enlarged image — stop propagation so clicks on it don't close */}
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

export default function WorkPage() {
    const total = String(projects.length).padStart(2, "0");

    return (
        <main id="work" className="overflow-hidden">
            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="relative min-h-[92svh] bg-paper text-ink">
                <div className="mx-auto flex min-h-[92svh] w-full max-w-[1600px] flex-col px-6 py-6 sm:px-8 lg:px-12 lg:py-8">
                    <header className="flex items-center justify-between border-b border-ink/15 pb-4">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                            03 / Work
                        </span>

                        <span
                            className={`${mono.className} text-[9px] uppercase tracking-[0.25em] text-ink/40`}
                        >
                            {total} Projects
                        </span>
                    </header>

                    <div className="flex flex-1 items-center py-16 lg:py-20">
                        <div className="grid w-full gap-14 lg:grid-cols-[0.58fr_0.42fr] lg:items-end lg:gap-20">
                            <div>
                                <p
                                    className={`${mono.className} mb-6 text-[9px] uppercase tracking-[0.25em] text-accent`}
                                >
                                    Selected work
                                </p>

                                <h1
                                    className={`${serif.className} max-w-[900px] text-[clamp(4.3rem,9vw,9.5rem)] leading-[0.78] tracking-[-0.065em]`}
                                >
                                    Things
                                    <br />
                                    <span className="text-accent">
                                        I&apos;ve built.
                                    </span>
                                </h1>

                                <p className="mt-10 max-w-[530px] text-[15px] leading-7 text-ink/60">
                                    A selection of products built across
                                    real-time collaboration, commerce,
                                    publishing, product design and AI-oriented
                                    experiences.
                                </p>

                                <div className="mt-10 flex items-center gap-3">
                                    <span className="size-1.5 rounded-full bg-accent" />

                                    <span
                                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-ink/40`}
                                    >
                                        Built to solve problems, not fill screens
                                    </span>
                                </div>
                            </div>

                            {/* PROJECT INDEX */}
                            <div className="border-t border-ink/15">
                                {projects.map((project) => (
                                    <a
                                        key={project.number}
                                        href={`#project-${project.number}`}
                                        className="group grid grid-cols-[28px_1fr_auto] items-center gap-4 border-b border-ink/15 py-4 transition-colors hover:text-accent"
                                    >
                                        <span
                                            className={`${mono.className} text-[9px] text-ink/30`}
                                        >
                                            {project.number}
                                        </span>

                                        <div className="min-w-0">
                                            <div className="flex items-baseline gap-3">
                                                <span
                                                    className={`${serif.className} text-[26px] leading-none tracking-[-0.035em]`}
                                                >
                                                    {project.name}
                                                </span>

                                                <span className="hidden truncate text-[8px] uppercase tracking-[0.18em] text-ink/35 md:block">
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        <FiArrowUpRight className="text-ink/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-ink/15 pt-4">
                        <span
                            className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-ink/35`}
                        >
                            Case studies / selected archive
                        </span>

                        <span
                            className={`${mono.className} flex items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-ink/40`}
                        >
                            Scroll
                            <FiArrowDown />
                        </span>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PROJECTS
            ========================================================= */}

            {projects.map((project, i) => {
                const theme = i % 2 === 0 ? themes.dark : themes.light;
                const imageLeft = i % 2 === 1;
                const next = projects[i + 1];

                return (
                    <section
                        key={project.number}
                        id={`project-${project.number}`}
                        className={`relative min-h-[100svh] overflow-hidden ${theme.section}`}
                    >
                        <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-5 py-5 sm:px-8 lg:px-12 lg:py-6">
                            {/* Compact project header */}
                            <header
                                className={`flex shrink-0 items-center justify-between border-b pb-3 ${theme.border}`}
                            >
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <span
                                        className={`${mono.className} text-[9px] text-accent`}
                                    >
                                        {project.number}
                                    </span>
                                    <span
                                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] ${theme.muted}`}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                <span
                                    className={`${mono.className} text-[8px] uppercase tracking-[0.2em] ${theme.muted}`}
                                >
                                    {project.year} · {project.number} / {total}
                                </span>
                            </header>

                            {/* One-screen project composition */}
                            <div
                                className={`grid min-h-0 flex-1 items-center gap-7 py-6 lg:grid-cols-12 lg:gap-10 lg:py-8 ${imageLeft
                                    ? "lg:[&>div:first-child]:order-2"
                                    : ""
                                    }`}
                            >
                                {/* Project visual */}
                                <div className="min-w-0 lg:col-span-7">
                                    <ProjectVisual
                                        project={project}
                                        theme={theme}
                                    />
                                </div>

                                {/* Recruiter-first content */}
                                <div className="min-w-0 lg:col-span-5">
                                    <div className="max-w-[580px]">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span
                                                className={`${mono.className} text-[8px] uppercase tracking-[0.22em] text-accent`}
                                            >
                                                {project.accentLabel}
                                            </span>
                                            <span className={`h-px w-8 ${theme.border}`} />
                                        </div>

                                        <h2
                                            className={`${serif.className} text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.78] tracking-[-0.065em]`}
                                        >
                                            {project.name}
                                            <span className="text-accent">.</span>
                                        </h2>

                                        <p
                                            className={`${serif.className} mt-5 max-w-[520px] text-[clamp(1.15rem,1.8vw,1.55rem)] leading-[1.15] tracking-[-0.025em] ${theme.body}`}
                                        >
                                            {project.tagline}
                                        </p>

                                        <p
                                            className={`mt-4 max-w-[500px] text-[12px] leading-5 ${theme.body}`}
                                        >
                                            {project.description}
                                        </p>

                                        {/* The strongest proof, without the case-study wall of text */}
                                        <div className="mt-6 grid gap-3 border-y border-current/10 py-5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                                            {project.built.slice(0, 3).map((item, index) => (
                                                <div key={item} className="flex gap-2.5">
                                                    <span
                                                        className={`${mono.className} mt-0.5 shrink-0 text-[7px] text-accent`}
                                                    >
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>
                                                    <p
                                                        className={`text-[10px] leading-[1.45] ${theme.body}`}
                                                    >
                                                        {item}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                                            <TechList
                                                stack={project.stack.slice(0, 6)}
                                                theme={theme}
                                            />
                                        </div>

                                        <div
                                            className={`mt-6 flex flex-wrap items-center gap-3 border-t pt-5 ${theme.border}`}
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
                                                    className={`group flex h-9 items-center gap-2 rounded-full border px-4 text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent ${theme.border}`}
                                                >
                                                    <FiGithub />
                                                    <span>Source</span>
                                                </a>
                                            )}

                                            <span
                                                className={`${mono.className} ml-auto hidden text-[7px] uppercase tracking-[0.16em] ${theme.muted} sm:block`}
                                            >
                                                {project.deployed || "Product experience"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tiny navigation rail — keeps the page scannable */}
                            <footer
                                className={`flex shrink-0 items-center justify-between border-t pt-3 ${theme.border}`}
                            >
                                <span
                                    className={`${mono.className} text-[7px] uppercase tracking-[0.2em] ${theme.muted}`}
                                >
                                    {project.problem.split(".")[0]}.
                                </span>

                                {next ? (
                                    <a
                                        href={`#project-${next.number}`}
                                        className="group flex items-center gap-2 text-right"
                                    >
                                        <span
                                            className={`${mono.className} text-[7px] uppercase tracking-[0.2em] ${theme.muted}`}
                                        >
                                            Next · {next.name}
                                        </span>
                                        <FiArrowDown className="transition-transform group-hover:translate-y-1" />
                                    </a>
                                ) : (
                                    <a
                                        href="#work"
                                        className="group flex items-center gap-2 text-right"
                                    >
                                        <span
                                            className={`${mono.className} text-[7px] uppercase tracking-[0.2em] ${theme.muted}`}
                                        >
                                            Back to work
                                        </span>
                                        <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </a>
                                )}
                            </footer>
                        </div>
                    </section>
                );
            })}

            {/* =========================================================
                END STATEMENT
            ========================================================= */}

            <section className="bg-paper px-6 py-32 text-ink sm:px-8 lg:px-12 lg:py-48">
                <div className="mx-auto max-w-[1600px]">
                    <div className="grid gap-14 lg:grid-cols-[0.7fr_0.3fr] lg:items-end">
                        <div>
                            <SectionLabel>Beyond the screenshots</SectionLabel>

                            <h2
                                className={`${serif.className} mt-7 max-w-[1050px] text-[clamp(3.8rem,7.5vw,8rem)] leading-[0.8] tracking-[-0.065em]`}
                            >
                                I build systems,
                                <br />
                                <span className="text-accent">
                                    not just screens.
                                </span>
                            </h2>
                        </div>

                        <div>
                            <p className="text-[13px] leading-6 text-ink/55">
                                The projects above span different products,
                                but the underlying goal stays the same:
                                understand the problem, design the experience,
                                and build the system behind it.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/#about"
                                    className="flex h-12 items-center gap-5 rounded-full border border-ink/20 pl-6 pr-2 text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
                                >
                                    About me

                                    <span className="flex size-8 items-center justify-center rounded-full bg-accent text-paper">
                                        <FiArrowUpRight />
                                    </span>
                                </Link>

                                <Link
                                    href="/#contact"
                                    className="flex h-12 items-center gap-5 rounded-full bg-accent pl-6 pr-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-paper"
                                >
                                    Get in touch

                                    <span className="flex size-8 items-center justify-center rounded-full bg-paper text-accent">
                                        <FiArrowUpRight />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 flex items-center gap-3 border-t border-ink/10 pt-5">
                        <FiCheck className="text-accent" />

                        <span
                            className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-ink/35`}
                        >
                            Five projects · one engineering mindset
                        </span>
                    </div>
                </div>
            </section>
        </main>
    );
}