import { mono, serif } from "@/app/fonts";
import type { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiReactquery,
    SiReacthookform,
    SiZod,
    SiTailwindcss,
    SiFramer,
    SiMui,
    SiShadcnui,
    SiNodedotjs,
    SiExpress,
    SiJsonwebtokens,
    SiGoogle,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiPrisma,
    SiDrizzle,
    SiStripe,
    SiCloudinary,
    SiCloudflare,
    SiResend,
    SiDocker,
    SiVercel,
    SiGit,
    SiGithub,
    SiPostman,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

type Tool = {
    name: string;
    Icon?: IconType;
};

const stacks = [
    { name: "MERN", description: "MongoDB · Express · React · Node" },
    { name: "PERN", description: "PostgreSQL · Express · React · Node" },
    { name: "NEXT.JS", description: "React · TypeScript · Full-stack" },
];

const layers: {
    number: string;
    title: string;
    text: string;
    tools: Tool[];
}[] = [
        {
            number: "01",
            title: "Frontend",
            text: "Interfaces, state, forms & motion.",
            tools: [
                { name: "HTML5", Icon: FaHtml5 },
                { name: "CSS3", Icon: FaCss3Alt },
                { name: "JavaScript", Icon: SiJavascript },
                { name: "TypeScript", Icon: SiTypescript },
                { name: "React", Icon: SiReact },
                { name: "Next.js", Icon: SiNextdotjs },
                { name: "Redux Toolkit", Icon: SiRedux },
                { name: "Zustand" },
                { name: "React Query", Icon: SiReactquery },
                { name: "React Hook Form", Icon: SiReacthookform },
                { name: "Zod", Icon: SiZod },
                { name: "Tailwind", Icon: SiTailwindcss },
                { name: "Framer Motion", Icon: SiFramer },
                { name: "Material UI", Icon: SiMui },
                { name: "Shadcn", Icon: SiShadcnui },
                { name: "Recharts" },
            ],
        },
        {
            number: "02",
            title: "Backend",
            text: "APIs, auth, real-time & background work.",
            tools: [
                { name: "Node.js", Icon: SiNodedotjs },
                { name: "Express", Icon: SiExpress },
                { name: "REST APIs" },
                { name: "WebSockets" },
                { name: "JWT", Icon: SiJsonwebtokens },
                { name: "Google OAuth", Icon: SiGoogle },
                { name: "BullMQ" },
            ],
        },
        {
            number: "03",
            title: "Data",
            text: "Relational modelling, queries & caching.",
            tools: [
                { name: "PostgreSQL", Icon: SiPostgresql },
                { name: "MongoDB", Icon: SiMongodb },
                { name: "Redis", Icon: SiRedis },
                { name: "Prisma", Icon: SiPrisma },
                { name: "Drizzle ORM", Icon: SiDrizzle },
            ],
        },
        {
            number: "04",
            title: "Integrations",
            text: "Payments, media, email & edge services.",
            tools: [
                { name: "Stripe", Icon: SiStripe },
                { name: "Cloudinary", Icon: SiCloudinary },
                { name: "Cloudflare", Icon: SiCloudflare },
                { name: "Nodemailer" },
                { name: "Resend", Icon: SiResend },
            ],
        },
        {
            number: "05",
            title: "Delivery",
            text: "Shipping, version control & quality.",
            tools: [
                { name: "Docker", Icon: SiDocker },
                { name: "Vercel", Icon: SiVercel },
                { name: "Git", Icon: SiGit },
                { name: "GitHub", Icon: SiGithub },
                { name: "Postman", Icon: SiPostman },
                { name: "Agile / Scrum" },
                { name: "Web Performance" },
                { name: "Accessibility" },
            ],
        },
    ];

export default function Capabilities() {
    return (
        <section
            id="capabilities"
            className="relative min-h-dvh overflow-hidden bg-paper text-ink lg:h-dvh lg:min-h-0"
        >
            <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 py-6 sm:px-8 lg:px-14 lg:py-8">

                {/* TOP BAR */}
                <header className="flex shrink-0 items-center justify-between border-b border-ink/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        02 / Capabilities
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-ink/35 sm:block`}
                    >
                        The tools behind the work
                    </span>
                </header>

                {/* CONTENT */}
                <main className="grid min-h-0 flex-1 grid-cols-1 gap-10 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16 lg:py-6">

                    {/* LEFT — INTRO */}
                    <div className="flex flex-col justify-center">

                        <p
                            className={`${mono.className} mb-5 text-[8px] uppercase tracking-[0.3em] text-accent`}
                        >
                            How I build
                        </p>

                        <h2
                            className={`${serif.className} max-w-[520px] text-[clamp(3rem,5vw,5.8rem)] leading-[0.86] tracking-[-0.06em]`}
                        >
                            What I
                            <span className="block text-ink/35">
                                work with.
                            </span>
                        </h2>

                        <p className="mt-7 max-w-[390px] text-[13px] leading-6 text-ink/55 lg:text-sm">
                            I choose technologies around the product —
                            balancing interface quality, maintainability,
                            performance and the problem being solved.
                        </p>

                        {/* STACKS */}
                        <div className="mt-9 max-w-[400px] border-t border-ink/15">
                            {stacks.map((stack) => (
                                <div
                                    key={stack.name}
                                    className="group flex items-center justify-between gap-5 border-b border-ink/15 py-3.5"
                                >
                                    <span
                                        className={`${mono.className} text-[12px] font-semibold tracking-[0.18em] transition-colors duration-300 group-hover:text-accent`}
                                    >
                                        {stack.name}
                                    </span>

                                    <span className="text-right text-[12px] text-ink/40">
                                        {stack.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — TECHNOLOGY MATRIX */}
                    <div className="min-w-0 lg:max-w-[850px] lg:justify-self-end">

                        <div className="border-t border-ink/15">

                            {layers.map((layer) => (
                                <div
                                    key={layer.number}
                                    className="group grid grid-cols-[30px_110px_1fr] gap-4 border-b border-ink/15 py-4 sm:grid-cols-[34px_145px_1fr] sm:gap-5 lg:grid-cols-[34px_155px_1fr] lg:py-[clamp(0.65rem,1.55vh,1rem)]"
                                >
                                    {/* NUMBER */}
                                    <span
                                        className={`${mono.className} pt-1 text-[8px] text-ink/25 transition-colors duration-300 group-hover:text-accent`}
                                    >
                                        {layer.number}
                                    </span>

                                    {/* CATEGORY */}
                                    <div>
                                        <h3
                                            className={`${serif.className} text-[clamp(1.35rem,2vw,2rem)] leading-none tracking-[-0.035em]`}
                                        >
                                            {layer.title}
                                        </h3>

                                        <p className="mt-1.5 hidden max-w-[140px] text-[12px] leading-[15.8px] text-ink/35 sm:block">
                                            {layer.text}
                                        </p>
                                    </div>

                                    {/* TOOLS */}
                                    <ul className="flex min-w-0 flex-wrap content-center gap-x-4 gap-y-2">
                                        {layer.tools.map(({ name, Icon }) => (
                                            <li
                                                key={name}
                                                className="flex items-center gap-1.5"
                                            >
                                                <span className="flex size-3.5 shrink-0 items-center justify-center">
                                                    {Icon ? (
                                                        <Icon className="text-[13px] text-ink/35 transition-all duration-300 group-hover:text-accent" />
                                                    ) : (
                                                        <span className="size-1 rounded-full bg-ink/20 transition-colors duration-300 group-hover:bg-accent" />
                                                    )}
                                                </span>

                                                <span className="whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.055em] text-ink/55 transition-colors duration-300 group-hover:text-ink/75">
                                                    {name}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* SMALL FOOTNOTE */}
                        <div className="mt-3 flex items-center justify-between">
                            <span
                                className={`${mono.className} text-[7px] uppercase tracking-[0.2em] text-ink/25`}
                            >
                                Interface · Systems · Data · Delivery
                            </span>

                            <a
                                href="#contact"
                                className="group flex items-center gap-1.5 text-[8px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-accent"
                            >
                                Build something
                                <FiArrowUpRight
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </a>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}