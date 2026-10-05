import { mono, serif } from "@/app/fonts";
import { MotionReveal, MotionStagger, MotionItem } from "./motion";

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
            className="relative flex min-h-dvh overflow-x-clip bg-ink text-paper"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-6 lg:px-14 lg:py-8">

                {/* HEADER */}
                <MotionReveal className="flex shrink-0 items-center justify-between border-b border-paper/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        01 / About
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-paper/40 sm:block`}
                    >
                        How I approach the work
                    </span>
                </MotionReveal>

                {/* MAIN */}
                <div className="grid flex-1 grid-cols-1 gap-12 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24 lg:py-14">

                    {/* LEFT — INTRO */}
                    <MotionReveal className="flex flex-col justify-center">

                        <h2
                            className={`${serif.className} max-w-[720px] text-[clamp(2.8rem,5.8vw,6.2rem)] leading-[0.88] tracking-[-0.055em]`}
                        >
                            I like understanding
                            <br />
                            things before I
                            <span className="text-paper/40"> build them.</span>
                        </h2>

                        <p className="mt-8 max-w-[560px] text-[13px] leading-6 text-paper/60 lg:text-sm">
                            I care about what happens underneath the interface:
                            how the pieces fit together, where complexity comes
                            from, and what can go wrong. The goal is not to make
                            things complicated. It is to make them make sense.
                        </p>

                        {/* QUOTE */}
                        <div className="mt-10 max-w-[600px] border-l border-accent/50 pl-5 lg:mt-14">
                            <blockquote
                                className={`${serif.className} text-[clamp(1.15rem,1.8vw,1.65rem)] leading-[1.1] tracking-[-0.02em] text-paper/80`}
                            >
                                An idiot admires{" "}
                                <span className="text-paper/30">
                                    complexity
                                </span>
                                , a genius admires{" "}
                                <em className="text-accent">
                                    simplicity.
                                </em>
                            </blockquote>

                            <p
                                className={`${mono.className} mt-3 text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                            >
                                — Terry A. Davis
                            </p>
                        </div>
                    </MotionReveal>

                    {/* RIGHT — PRINCIPLES */}
                    <div className="lg:justify-self-end lg:w-full lg:max-w-[470px]">
                        <MotionStagger className="border-t border-paper/15">
                            {principles.map((principle) => (
                                <MotionItem
                                    key={principle.number}
                                    className="group grid grid-cols-[38px_1fr] gap-3 border-b border-paper/15 py-6"
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
                                </MotionItem>
                            ))}
                        </MotionStagger>

                        <MotionReveal delay={0.15} className="mt-6 flex items-center justify-between">
                            <span
                                className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                            >
                                Principles over prescriptions
                            </span>

                            <span
                                className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                            >
                                01 / 05
                            </span>
                        </MotionReveal>
                    </div>
                </div>

                {/* FOOTER */}
                <MotionReveal className="flex shrink-0 items-center justify-between border-t border-paper/15 pt-4">
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
                </MotionReveal>
            </div>
        </section>
    );
}