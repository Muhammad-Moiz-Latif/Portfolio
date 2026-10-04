import { mono, serif } from "@/app/fonts";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

type Milestone = {
    year: string;
    type: string;
    title: string;
    organization: string;
    description: string;
    x: number; // node position, % of route width
    y: number; // node position, % of route height
    level: 1 | 2 | 3; // visual weight, grows toward the present
    current?: boolean;
    href?: string;
};

const journey: Milestone[] = [
    {
        year: "2022 — 26",
        type: "Education",
        title: "B.S. Computer Science",
        organization: "COMSATS University Islamabad",
        description:
            "Completed a Computer Science degree with a focus on software engineering, databases, systems, and application development.",
        x: 50,
        y: 3,
        level: 1,
    },
    {
        year: "2024 — 26",
        type: "Competitions",
        title: "University Hackathons",
        organization: "Runner-up",
        description:
            "Competed in university hackathons as part of a team and finished as runner-up.",
        x: 40,
        y: 20.5,
        level: 1,
    },
    {
        year: "2025 — 26",
        type: "Independent",
        title: "Product Engineering",
        organization: "Self-directed",
        description:
            "Built and deployed full-stack products independently, including Gizmo and PostVault, plus smaller apps like CashTrack, Axion and Movielyzer.",
        x: 30,
        y: 38,
        level: 2,
    },
    {
        year: "Final year",
        type: "Project",
        title: "Lessonix",
        organization: "Final Year Project",
        description:
            "AI-powered learning platform that turns videos and documents into quizzes, coding tasks and feedback. Built with Muhammad Aftab, supervised by Mr. Amir Shabir Pare.",
        x: 20,
        y: 55,
        level: 2,
        // href: "https://github.com/your-username/lessonix",
    },
    {
        year: "Jul — Aug 2026",
        type: "Professional",
        title: "Full Stack Development Intern",
        organization: "Zynvex Solutions",
        description:
            "Moved long-running jobs off the API with BullMQ and Redis, and scaled real-time WebSocket collaboration across server instances on DevFlow, in an Agile team.",
        x: 10,
        y: 72,
        level: 3,
        current: true,
    },
];

const last = journey[journey.length - 1];
const TAIL_END = 96;

// Each segment leaves a node straight down, then eases toward the next one.
// Because the route drifts left as it descends, it never crosses a card.
const segments = journey.slice(0, -1).map((from, i) => {
    const to = journey[i + 1];
    const mid = (from.y + to.y) / 2;
    return `M ${from.x} ${from.y} C ${from.x} ${mid}, ${to.x} ${mid}, ${to.x} ${to.y}`;
});

const nodeStyles = {
    1: "size-2.5 border border-ink/50 bg-surface",
    2: "size-3 bg-ink",
    3: "size-5 bg-accent ring-4 ring-accent/20",
};

const titleStyles = {
    1: "text-[13px] font-semibold uppercase tracking-[0.12em]",
    2: `${serif.className} text-[clamp(1.5rem,min(2.2vw,4vh),2.1rem)] leading-none tracking-[-0.03em]`,
    3: `${serif.className} text-[clamp(1.9rem,min(3.2vw,5.6vh),3.2rem)] leading-[0.95] tracking-[-0.04em]`,
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative min-h-dvh overflow-x-clip bg-paper text-ink"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col px-6 py-6 lg:px-14 lg:py-8">
                {/* HEADER */}
                <div className="flex shrink-0 items-center justify-between border-b border-ink/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        04 / Experience
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-ink/40 sm:block`}
                    >
                        A short record of the journey
                    </span>
                </div>

                {/* MAIN */}
                <div className="grid grid-cols-1 gap-12 pt-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:pt-6">
                    {/* LEFT — pinned while the route scrolls */}
                    <div className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center lg:self-start">
                        <h2
                            className={`${serif.className} text-[clamp(2.75rem,min(5vw,9vh),5.75rem)] leading-[0.9] tracking-[-0.05em]`}
                        >
                            Started with
                            <br />
                            learning.
                            <span className="mt-2 block text-ink/40">
                                Stayed for
                                <br />
                                the building.
                            </span>
                        </h2>

                        <div className="mt-8 flex max-w-[420px] items-start gap-4">
                            <FiArrowDownRight className="mt-1 shrink-0 text-accent" />

                            <p className="text-[13px] leading-5 text-ink/60 lg:text-sm lg:leading-6">
                                I&apos;m at the beginning of my professional
                                career, but I&apos;ve spent the last few years
                                deliberately pushing beyond tutorials and small
                                exercises into complete systems.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — THE ROUTE */}
                    <div className="relative lg:h-[max(160dvh,1100px)]">
                        {/* route lines (desktop) */}
                        <svg
                            aria-hidden
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                        >
                            {segments.map((d, i) => (
                                <path
                                    key={d}
                                    d={d}
                                    fill="none"
                                    vectorEffect="non-scaling-stroke"
                                    className={
                                        i === segments.length - 1
                                            ? "stroke-accent"
                                            : "stroke-ink/25"
                                    }
                                    strokeWidth={i === segments.length - 1 ? 2 : 1}
                                />
                            ))}

                            {/* continues past Zynvex: still going */}
                            <path
                                d={`M ${last.x} ${last.y} L ${last.x} ${TAIL_END}`}
                                fill="none"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-accent"
                                strokeWidth={2}
                            />
                        </svg>

                        <ol>
                            {journey.map((m) => (
                                <li
                                    key={m.title}
                                    style={
                                        {
                                            "--x": `${m.x}%`,
                                            "--y": `${m.y}%`,
                                        } as React.CSSProperties
                                    }
                                    className={`relative border-l border-ink/20 pb-10 pl-7 lg:absolute lg:-mt-[7px] lg:border-l-0 lg:pb-0 lg:[left:var(--x)] lg:[top:var(--y)] ${m.level === 3 ? "lg:w-[60%]" : "lg:w-[46%]"
                                        }`}
                                >
                                    {/* node */}
                                    <span
                                        aria-hidden
                                        className={`absolute left-0 top-[7px] z-10 -translate-x-1/2 -translate-y-1/2 rounded-full ${nodeStyles[m.level]}`}
                                    />

                                    <div className="flex items-center gap-3">
                                        <span
                                            className={`${mono.className} text-[9px] uppercase tracking-[0.08em] text-ink/45`}
                                        >
                                            {m.year}
                                        </span>

                                        <span className="text-[8px] uppercase tracking-[0.18em] text-accent">
                                            {m.current ? "Now" : m.type}
                                        </span>
                                    </div>

                                    <h3 className={`mt-2 ${titleStyles[m.level]}`}>
                                        {m.title}
                                    </h3>

                                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.15em] text-ink/45">
                                        {m.organization}
                                    </p>

                                    <p
                                        className={`mt-3 max-w-[520px] ${m.level === 3
                                            ? "text-sm leading-6 text-ink/70"
                                            : "text-[13px] leading-5 text-ink/55"
                                            }`}
                                    >
                                        {m.description}
                                    </p>

                                    {m.href && (
                                        <a
                                            href={m.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-3 inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:text-accent"
                                        >
                                            View repository
                                            <FiArrowUpRight />
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ol>

                        {/* end of the line */}
                        <p
                            style={
                                { "--x": `${last.x}%` } as React.CSSProperties
                            }
                            className={`${mono.className} border-l border-accent pb-1 pl-7 text-[8px] uppercase tracking-[0.22em] text-accent lg:absolute lg:bottom-0 lg:border-l-0 lg:pb-0 lg:pl-0 lg:[left:var(--x)] lg:-translate-x-1/2 lg:whitespace-nowrap`}
                        >
                            ↓ Still building
                        </p>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-10 flex shrink-0 items-center justify-between border-t border-ink/15 pt-4 lg:mt-12">
                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-ink/30`}
                    >
                        Islamabad · Pakistan
                    </span>

                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-ink/30`}
                    >
                        2022 — Present
                    </span>
                </div>
            </div>
        </section>
    );
}