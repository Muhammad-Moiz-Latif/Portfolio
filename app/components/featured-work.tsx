import Image from "next/image";
import type { IconType } from "react-icons";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
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

import devflow_thumbnail from "@/app/assets/devflow-01.png";
import gizmo_thumbnail from "@/app/assets/gizmo-01.png";
import postvault_thumbnail from "@/app/assets/postvault-01.png";

const projects = [
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
        image: devflow_thumbnail,
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
        image: gizmo_thumbnail,
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
        image: postvault_thumbnail,
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
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
                                                group
                                                relative
                                                mt-8
                                                flex
                                                h-11
                                                w-full
                                                max-w-[250px]
                                                items-center
                                                justify-between
                                                overflow-hidden
                                                rounded-full
                                                border
                                                pl-5
                                                pr-1
                                                text-[10px]
                                                font-medium
                                                uppercase
                                                tracking-[0.2em]
                                                ${t.cta}
                                                hover:border-accent
                                            `}
                                        >
                                            <span
                                                aria-hidden
                                                className="
                                                    absolute
                                                    inset-0
                                                    translate-y-full
                                                    rounded-full
                                                    bg-accent
                                                    transition-transform
                                                    duration-500
                                                    group-hover:translate-y-0
                                                "
                                            />

                                            <span
                                                className="
                                                    relative
                                                    z-10
                                                    transition-colors
                                                    duration-500
                                                    group-hover:text-paper
                                                "
                                            >
                                                View live
                                            </span>

                                            <span
                                                className="
                                                    relative
                                                    z-10
                                                    flex
                                                    size-8.5
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-accent
                                                    text-paper
                                                    transition-all
                                                    duration-500
                                                    group-hover:rotate-45
                                                    group-hover:bg-paper
                                                    group-hover:text-accent
                                                "
                                            >
                                                ↗
                                            </span>
                                        </a>
                                    </div>
                                </div>

                                {/* IMAGE */}
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
                                    <a
                                        href={project.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        tabIndex={-1}
                                        className={`
                                            group/img
                                            relative
                                            block
                                            h-full
                                            w-full
                                            overflow-hidden
                                            border
                                            ${t.frame}
                                            shadow-[0_35px_100px_-35px_rgba(0,0,0,0.5)]
                                        `}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.imageAlt}
                                            fill
                                            sizes="
                                                (min-width: 1280px) 62vw,
                                                (min-width: 1024px) 58vw,
                                                100vw
                                            "
                                            className={`
                                                object-cover
                                                object-center
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover/img:scale-[1.015]
                                            `}
                                            priority={i === 0}
                                        />
                                    </a>
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