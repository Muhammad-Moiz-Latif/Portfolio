import HeroBackground from "./ui/halo";
import { serif } from "@/app/fonts";
import { FaXTwitter } from "react-icons/fa6";
import {
    FiGithub,
    FiInstagram,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Muhammad-Moiz-Latif",
        Icon: FiGithub,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/moizlatif",
        Icon: FiLinkedin,
    },
    {
        label: "X",
        href: "https://x.com/yourhandle",
        Icon: FaXTwitter,
    },
    {
        label: "Instagram",
        href: "https://instagram.com/yourhandle",
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
            <div className="absolute inset-x-6 bottom-8 flex items-end justify-between lg:inset-x-12 lg:bottom-12">
                {/* LEFT — statement + explore */}
                <div className={`flex w-[min(78vw,24rem)] flex-col ${COLUMN}`}>
                    <p
                        className={`text-[clamp(1.45rem,2.15vw,2.35rem)] leading-[1.12] text-ink ${serif.className}`}
                    >
                        I like software that feels simple on the surface —{" "}
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
                </div>

                {/* RIGHT — short positioning + social icons */}
                <div className={`hidden flex-col md:flex ${COLUMN}`}>
                    <p className="text-sm leading-6 text-ink/70">
                        I build full-stack products with the weight in the systems —
                        making them fast, reliable, and easy to reason about.
                    </p>

                    {/* SOCIAL ICONS: individual circles, spread across the column */}
                    <div className="mt-8 flex w-full items-center justify-between">
                        {socials.map(({ label, href, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                className="group flex size-12 items-center justify-center rounded-full border border-ink/25 text-ink/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"
                            >
                                <Icon className="text-[18px] transition-transform duration-300 group-hover:scale-110" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </HeroBackground>
    );
}