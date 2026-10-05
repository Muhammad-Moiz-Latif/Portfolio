import HeroBackground from "./ui/hero-background";
import { serif } from "@/app/fonts";
import { FaXTwitter } from "react-icons/fa6";
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";
import {
    CopyEmailLink,
    MotionMountReveal,
    MotionStagger,
    MotionItem,
} from "./motion";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Muhammad-Moiz-Latif",
        Icon: FiGithub,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/moiz-latif-872414253/",
        Icon: FiLinkedin,
    },
    {
        label: "X",
        href: "https://x.com/tusapyo",
        Icon: FaXTwitter,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/moizlatiff/",
        Icon: FiInstagram,
    },
    {
        label: "Email",
        href: "mailto:moizlatif4137@gmail.com",
        Icon: FiMail,
    },
];

// One width for both columns, so they can never drift apart
const COLUMN = "md:w-[clamp(280px,26vw,400px)]";

export default function Hero() {
    return (
        <HeroBackground>
            {/* CONTENT ROW */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-paper via-paper/85 to-transparent px-6 pb-8 pt-16 lg:inset-x-12 lg:bg-transparent lg:px-0 lg:pb-12 lg:pt-0">
                {/* LEFT — statement + explore */}
                <MotionMountReveal className={`flex w-[min(78vw,24rem)] flex-col max-[425px]:items-center ${COLUMN}`}>
                    <p
                        className={`text-[clamp(1.45rem,2.15vw,2.35rem)] leading-[1.12] text-ink max-[425px]:text-center ${serif.className}`}
                    >
                        I like software that feels simple on the surface -{" "}
                        <em className="text-muted">
                            because the thinking underneath isn&apos;t.
                        </em>
                    </p>

                    <a
                        href="#projects"
                        className="group relative mt-8 flex h-12 w-full items-center justify-between overflow-hidden rounded-full border border-ink/30 pl-6 pr-[5px] text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-500 hover:border-accent"
                    >
                        <span
                            aria-hidden
                            className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 ease-out group-hover:translate-y-0"
                        />

                        <span className="relative z-10 transition-colors duration-500 group-hover:text-paper">
                            Explore work
                        </span>

                        <span
                            aria-hidden
                            className="relative z-10 flex size-9 items-center justify-center rounded-full bg-accent text-paper transition-all duration-500 group-hover:rotate-45 group-hover:bg-paper group-hover:text-accent"
                        >
                            ↗
                        </span>
                    </a>
                    <div className="mt-5 flex w-full items-center justify-between max-[425px]:w-auto max-[425px]:justify-center max-[425px]:gap-3 md:hidden">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="flex size-10 items-center justify-center rounded-full border border-ink/25 text-ink/70"
                            >
                                <Icon className="text-[16px]" />
                            </a>
                        ))}
                    </div>
                </MotionMountReveal>

                {/* RIGHT — short positioning + social icons */}
                <MotionMountReveal className={`hidden flex-col md:flex ${COLUMN}`} delay={0.1}>
                    <p className="text-sm leading-6 text-ink/70">
                        I build full-stack products with the weight in the systems,
                        making them fast, reliable, and easy to reason about.
                    </p>


                    <MotionStagger className="mt-8 flex w-full items-center justify-between">
                        {socials.map(({ label, href, Icon }) => (
                            <MotionItem key={label}>
                                {href.startsWith("mailto:") ? (
                                    <CopyEmailLink
                                        email="moizlatif4137@gmail.com"
                                        href={href}
                                        aria-label={`${label} (copies email address)`}
                                        className="group flex size-12 items-center justify-center rounded-full border border-ink/25 text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                                    >
                                        <Icon className="text-[18px] transition-transform duration-300 group-hover:scale-110" />
                                    </CopyEmailLink>
                                ) : (
                                    <a
                                        href={href}
                                        aria-label={label}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex size-12 items-center justify-center rounded-full border border-ink/25 text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                                    >
                                        <Icon className="text-[18px] transition-transform duration-300 group-hover:scale-110" />
                                    </a>
                                )}
                            </MotionItem>
                        ))}
                    </MotionStagger>
                </MotionMountReveal>
            </div>
        </HeroBackground>
    );
}