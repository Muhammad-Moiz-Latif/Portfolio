import { mono, serif } from "@/app/fonts";
import { FiArrowDownRight } from "react-icons/fi";

const principles = [
    {
        number: "01",
        title: "See the whole picture",
        text: "I want to understand the problem, its moving parts, dependencies, and failure points before I build.",
    },
    {
        number: "02",
        title: "Keep complexity earned",
        text: "If a simpler solution works, I prefer it. Complexity should solve a problem, not decorate the code.",
    },
    {
        number: "03",
        title: "Plan, then adapt",
        text: "I like a clear direction before coding, but I will change course when the reality of the problem demands it.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative flex min-h-dvh overflow-hidden bg-ink text-paper"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-6 lg:px-14 lg:py-8">

                {/* HEADER */}
                <div className="flex shrink-0 items-center justify-between border-b border-paper/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        01 / About
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-paper/40 sm:block`}
                    >
                        The way I approach the work
                    </span>
                </div>

                {/* MAIN */}
                <div className="grid flex-1 grid-cols-1 gap-10 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-10">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center">

                        <p
                            className={`${mono.className} mb-4 text-[8px] uppercase tracking-[0.28em] text-accent`}
                        >
                            A working principle
                        </p>

                        <h2
                            className={`${serif.className} text-[clamp(3.2rem,5.8vw,6.2rem)] leading-[0.86] tracking-[-0.055em]`}
                        >
                            Simple on the
                            <br />
                            surface.
                            <span className="mt-2 block text-paper/45">
                                Deep underneath.
                            </span>
                        </h2>

                        <div className="mt-7 flex max-w-[580px] items-start gap-4">
                            <FiArrowDownRight className="mt-1 shrink-0 text-accent" />

                            <p className="max-w-[520px] text-[13px] leading-5 text-paper/60 lg:text-sm lg:leading-6">
                                I enjoy understanding things all the way down.
                                Not because every problem needs to be complicated,
                                but because knowing what is happening underneath
                                makes it easier to decide what doesn&apos;t need to be.
                            </p>
                        </div>

                        {/* QUOTE — kept visually attached to the statement */}
                        <div className="mt-8 border-l border-accent/50 pl-5 lg:mt-10">
                            <blockquote
                                className={`${serif.className} max-w-[650px] text-[clamp(1.45rem,2.4vw,2.35rem)] leading-[1.02] tracking-[-0.025em]`}
                            >
                                An idiot admires{" "}
                                <span className="text-paper/30">complexity</span>,
                                a genius admires{" "}
                                <em className="text-accent">simplicity.</em>
                            </blockquote>

                            <p
                                className={`${mono.className} mt-3 text-[8px] uppercase tracking-[0.2em] text-paper/35`}
                            >
                                — Terry A. Davis
                            </p>
                        </div>
                    </div>

                    {/* RIGHT — PRINCIPLES */}
                    <div className="lg:justify-self-end lg:w-full lg:max-w-[470px]">
                        <div className="border-t border-paper/15">
                            {principles.map((principle) => (
                                <article
                                    key={principle.number}
                                    className="group grid grid-cols-[38px_1fr] gap-3 border-b border-paper/15 py-5"
                                >
                                    <span
                                        className={`${serif.className} text-xl leading-none text-paper/25 transition-colors duration-300 group-hover:text-accent`}
                                    >
                                        {principle.number}
                                    </span>

                                    <div className="transition-transform duration-500 ease-out group-hover:translate-x-1.5">
                                        <h3 className="text-[10px] font-semibold uppercase tracking-[0.15em]">
                                            {principle.title}
                                        </h3>

                                        <p className="mt-2 text-[12px] leading-5 text-paper/45 transition-colors duration-300 group-hover:text-paper/80">
                                            {principle.text}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* SMALL PERSONAL MARK */}
                        <div className="mt-6 flex items-center justify-between">
                            <span
                                className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                            >
                                Understand · Simplify · Build
                            </span>

                            <span
                                className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                            >
                                01 / 05
                            </span>
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex shrink-0 items-center justify-between border-t border-paper/15 pt-4">
                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                    >
                        How I think before I build
                    </span>

                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                    >
                        Moiz Latif
                    </span>
                </div>
            </div>
        </section>
    );
}