import HeroTechHalo from "./ui/halo";

export default function Hero() {
    return (
        <HeroTechHalo>
            {/* pointer-events-none so the grid doesn't block halo hover/tooltips;
                re-enabled on the text blocks below */}
            <div className="pointer-events-none mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-y-8 px-6 py-10 md:grid-cols-[1fr_460px_1fr] md:grid-rows-2 md:gap-x-6">

                {/* TOP LEFT: name */}
                <div className="pointer-events-auto md:self-start">
                    <h1 className="text-5xl font-medium uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                        Moiz
                        <br />
                        Latif
                    </h1>
                    <p className="mt-3 text-lg uppercase tracking-[0.2em] text-muted sm:text-xl">
                        Software Engineer
                    </p>
                </div>

                {/* CENTER: reserved for halo + photo (spacer) */}
                <div className="h-[440px] md:h-auto" aria-hidden />

                {/* TOP RIGHT: tagline + CTAs */}
                <div className="pointer-events-auto md:self-start md:text-right">
                    <h2 className="text-2xl font-medium leading-tight sm:text-3xl">
                        I build software from idea to reality.
                    </h2>
                    <p className="mt-3 text-muted">
                        Turning complex problems into thoughtful, scalable digital products.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 md:justify-end">
                        <a
                            href="#projects"
                            className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-accent"
                        >
                            View my work
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full border border-ink/30 px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
                        >
                            Let&apos;s talk
                        </a>
                    </div>
                </div>

                {/* BOTTOM LEFT: about */}
                <div className="pointer-events-auto md:self-end">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-muted">
                        A little about me
                    </h2>
                    <p className="mt-3 max-w-sm text-ink/80">
                        I&apos;m a computer science graduate and software engineer who enjoys
                        turning ideas into real, usable systems. I care about the details,
                        from the interface people see to the architecture running behind it.
                    </p>
                </div>

                {/* CENTER (bottom row): spacer, desktop only */}
                <div className="hidden md:block" aria-hidden />

                {/* BOTTOM RIGHT: motto */}
                <div className="pointer-events-auto text-4xl font-medium uppercase leading-[1.05] tracking-tight text-muted md:self-end md:text-right md:text-5xl">
                    Build
                    <br />
                    Think
                    <br />
                    Iterate
                </div>
            </div>
        </HeroTechHalo>
    );
}