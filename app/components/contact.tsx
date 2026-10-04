import {
    FiArrowUpRight,
    FiFileText,
    FiGithub,
    FiLinkedin,
    FiMail,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { serif, mono } from "@/app/fonts";

const EMAIL = "moizlatif4137@gmail.com";

const contacts: {
    label: string;
    value: string;
    href: string;
    Icon: IconType;
    download?: boolean;
}[] = [
        {
            label: "Email",
            value: EMAIL,
            href: `mailto:${EMAIL}`,
            Icon: FiMail,
        },
        {
            label: "Résumé",
            value: "Download PDF",
            href: "/resume.pdf", // put the file in /public/resume.pdf
            Icon: FiFileText,
            download: true,
        },
        {
            label: "LinkedIn",
            value: "linkedin.com/in/moizlatif",
            href: "https://linkedin.com/in/moizlatif",
            Icon: FiLinkedin,
        },
        {
            label: "GitHub",
            value: "github.com/Muhammad-Moiz-Latif",
            href: "https://github.com/Muhammad-Moiz-Latif",
            Icon: FiGithub,
        },
        {
            label: "X",
            value: "@yourhandle", // replace, or delete this entry
            href: "https://x.com/yourhandle",
            Icon: FaXTwitter,
        },
    ];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative flex min-h-dvh overflow-hidden bg-ink text-paper lg:h-dvh"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-6 lg:px-14 lg:py-8">
                {/* HEADER */}
                <div className="flex shrink-0 items-center justify-between border-b border-paper/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        05 / Contact
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-paper/40 sm:block`}
                    >
                        Let&apos;s make something useful
                    </span>
                </div>

                {/* MAIN */}
                <div className="flex min-h-0 flex-1 flex-col justify-between gap-10 py-8 lg:py-6">
                    {/* STATEMENT */}
                    <div className="flex flex-1 flex-col justify-center">
                        <p
                            className={`${mono.className} mb-5 text-[9px] uppercase tracking-[0.28em] text-accent`}
                        >
                            Open to opportunities
                        </p>

                        <h2
                            className={`${serif.className} text-[clamp(3.2rem,min(9.4vw,17vh),10rem)] leading-[0.84] tracking-[-0.055em]`}
                        >
                            Have something
                            <br />
                            worth <em className="text-accent">building?</em>
                        </h2>
                    </div>

                    {/* BOTTOM GRID */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
                        {/* LEFT — message + CTA */}
                        <div>
                            <p className="max-w-[470px] text-[13px] leading-5 text-paper/60 lg:text-sm lg:leading-6">
                                Whether it&apos;s a product that needs a
                                developer, a problem worth solving, or simply a
                                conversation about an idea — I&apos;d like to
                                hear about it.
                            </p>

                            <a
                                href={`mailto:${EMAIL}`}
                                className="group relative mt-7 flex h-12 w-full max-w-[340px] items-center justify-between overflow-hidden rounded-full border border-paper/30 pl-6 pr-[5px] text-[11px] font-medium uppercase tracking-[0.22em] transition-colors duration-500 hover:border-accent"
                            >
                                <span
                                    aria-hidden
                                    className="absolute inset-0 translate-y-full rounded-full bg-accent transition-transform duration-500 ease-out group-hover:translate-y-0"
                                />

                                <span className="relative z-10">
                                    Start a conversation
                                </span>

                                <span
                                    aria-hidden
                                    className="relative z-10 flex size-9 items-center justify-center rounded-full bg-accent text-paper transition-all duration-500 group-hover:rotate-45 group-hover:bg-paper group-hover:text-accent"
                                >
                                    ↗
                                </span>
                            </a>
                        </div>

                        {/* RIGHT — links */}
                        <div className="border-t border-paper/15">
                            {contacts.map(
                                ({ label, value, href, Icon, download }) => {
                                    const external = href.startsWith("http");

                                    return (
                                        <a
                                            key={label}
                                            href={href}
                                            download={download}
                                            target={external ? "_blank" : undefined}
                                            rel={
                                                external
                                                    ? "noopener noreferrer"
                                                    : undefined
                                            }
                                            className="group grid grid-cols-[28px_90px_1fr_auto] items-center gap-3 border-b border-paper/15 py-[clamp(0.5rem,1.5vh,0.9rem)] transition-colors duration-300 hover:text-accent"
                                        >
                                            <Icon className="text-[15px] text-paper/45 transition-colors group-hover:text-accent" />

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                                {label}
                                            </span>

                                            <span className="truncate text-xs text-paper/50 transition-colors group-hover:text-accent">
                                                {value}
                                            </span>

                                            <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </a>
                                    );
                                },
                            )}
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex shrink-0 flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                    >
                        Moiz Latif · Full-Stack Developer
                    </span>

                    <span
                        className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                    >
                        Islamabad · Pakistan
                    </span>

                    <div className="flex items-center gap-6">
                        <span
                            className={`${mono.className} text-[8px] uppercase tracking-[0.2em] text-paper/30`}
                        >
                            © {new Date().getFullYear()}
                        </span>

                        <a
                            href="#"
                            className="group flex h-10 items-center gap-3 rounded-full border border-paper/30 pl-5 pr-1 text-[10px] font-medium uppercase tracking-[0.22em] text-paper transition-colors duration-300 hover:border-accent hover:bg-accent"
                        >
                            Back to top
                            <span
                                aria-hidden
                                className="flex size-8 items-center justify-center rounded-full bg-accent text-paper transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-paper group-hover:text-accent"
                            >
                                ↑
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}