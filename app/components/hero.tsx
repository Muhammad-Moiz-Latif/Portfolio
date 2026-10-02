import { FiArrowDownRight } from "react-icons/fi";
import HeroTechHalo from "./ui/halo";

export default function Hero() {
    return (
        <HeroTechHalo>
            <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 py-6 md:px-10">

                {/* MAIN CONTENT */}
                <div className="relative z-40 grid flex-1 grid-cols-1 md:grid-cols-[1fr_minmax(18rem,28rem)_1fr]">

                    {/* LEFT COPY */}
                    <div className="self-start pt-[17vh] md:pt-[22vh]">
                        <div className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted">
                            <span className="h-px w-7 bg-accent" />
                            Software Engineer
                        </div>

                        <h2 className="max-w-[27rem] text-[clamp(2.2rem,3.7vw,3.6rem)] font-medium leading-[0.98] tracking-[-0.055em] text-ink">
                            Building products
                            <br />
                            from <span className="text-accent">concept</span>
                            <br />
                            to production.
                        </h2>
                    </div>

                    {/* CENTER */}
                    <div />

                    {/* RIGHT COPY */}
                    <div className="self-start pt-[17vh] md:pt-[22vh] md:justify-self-end">
                        <div className="max-w-[18rem] border-t border-ink/15 pt-4">
                            <p className="text-sm leading-[1.5] text-muted">
                                I work across interfaces, APIs, databases,
                                and infrastructure to turn ideas into
                                software people can actually use.
                            </p>

                            <a
                                href="#projects"
                                className="group mt-7 inline-flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-ink"
                            >
                                <span className="border-b border-ink/30 pb-1 transition-colors group-hover:border-accent">
                                    Explore work
                                </span>

                                <span className="flex size-8 items-center justify-center rounded-full border border-ink/20 transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                                    <FiArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* GIANT NAME */}
                <div className="pointer-events-none absolute inset-x-0 bottom-2 z-30 overflow-hidden">
                    <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8">
                        <h1
                            aria-label="Moiz Latif"
                            className="flex w-full select-none justify-between whitespace-nowrap text-[16vw] font-bold uppercase leading-[0.7] tracking-[-0.085em] text-ink/90"
                        >
                            {"MOIZ LATIF".split("").map((character, index) => (
                                <span key={`${character}-${index}`}>
                                    {character === ""
                                        ? "\u00a0"
                                        : character}
                                </span>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>
        </HeroTechHalo>
    );
}