"use client";

import {
    FiArrowUpRight,
    FiFileText,
    FiGithub,
    FiLinkedin,
    FiMail,
    FiInstagram,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { serif, mono } from "@/app/fonts";
import { MotionReveal, MotionStagger, MotionItem } from "./motion";
import { useState } from "react";

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
            value: "linkedin.com/in/moiz-latif-872414253",
            href: "https://www.linkedin.com/in/moiz-latif-872414253/",
            Icon: FiLinkedin,
        },
        {
            label: "Instagram",
            value: "instagram.com/moizlatiff",
            href: "https://www.instagram.com/moizlatiff/",
            Icon: FiInstagram,
        },
        {
            label: "GitHub",
            value: "github.com/Muhammad-Moiz-Latif",
            href: "https://github.com/Muhammad-Moiz-Latif",
            Icon: FiGithub,
        },
        {
            label: "X",
            value: "@tusapyo",
            href: "https://x.com/tusapyo",
            Icon: FaXTwitter,
        },
    ];

export default function Contact() {
    const [contactChoiceOpen, setContactChoiceOpen] = useState(false);

    return (
        <section
            id="contact"
            className="relative flex min-h-dvh overflow-x-clip bg-ink text-paper"
        >
            <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 py-6 lg:px-14 lg:py-8">
                {/* HEADER */}
                <MotionReveal className="flex shrink-0 items-center justify-between border-b border-paper/15 pb-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.28em]">
                        05 / Contact
                    </span>

                    <span
                        className={`${mono.className} hidden text-[9px] uppercase tracking-[0.25em] text-paper/40 sm:block`}
                    >
                        Let&apos;s make something useful
                    </span>
                </MotionReveal>

                {/* MAIN */}
                <div className="flex min-h-0 flex-1 flex-col justify-between gap-10 py-8 lg:gap-8 lg:py-6">
                    {/* STATEMENT */}
                    <MotionReveal className="flex flex-1 flex-col justify-center">
                        <p
                            className={`${mono.className} mb-5 text-[9px] uppercase tracking-[0.28em] text-accent`}
                        >
                            Open to opportunities
                        </p>

                        <h2
                            className={`${serif.className} text-[clamp(2.4rem,min(9.4vw,14vh),10rem)] leading-[0.84] tracking-[-0.055em]`}
                        >
                            Have something
                            <br />
                            worth <em className="text-accent">building?</em>
                        </h2>
                    </MotionReveal>

                    {/* BOTTOM GRID */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end lg:gap-20">
                        {/* LEFT — message + CTA */}
                        <MotionReveal delay={0.1}>
                            <p className="max-w-[470px] text-[13px] leading-5 text-paper/60 lg:text-sm lg:leading-6">
                                Whether it&apos;s a product that needs a
                                developer, a problem worth solving, or simply a
                                conversation about an idea — I&apos;d like to
                                hear about it.
                            </p>

                            <button
                                type="button"
                                onClick={() => setContactChoiceOpen(true)}
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
                            </button>
                        </MotionReveal>

                        {/* RIGHT — links */}
                        <MotionStagger className="border-t border-paper/15">
                            {contacts.map(
                                ({ label, value, href, Icon, download }) => {
                                    const external = href.startsWith("http");

                                    return (
                                        <MotionItem key={label}>
                                            <a
                                                href={href}
                                                onClick={
                                                    label === "Email"
                                                        ? async () => {
                                                            try {
                                                                await navigator.clipboard.writeText(EMAIL);
                                                            } catch (error) {
                                                                console.error("Unable to copy email address.", error);
                                                            }
                                                        }
                                                        : undefined
                                                }
                                                download={download}
                                                target={external ? "_blank" : undefined}
                                                rel={
                                                    external
                                                        ? "noopener noreferrer"
                                                        : undefined
                                                }
                                                className="group grid grid-cols-[28px_90px_1fr_auto] items-center gap-3 border-b border-paper/15 py-[clamp(0.4rem,1.2vh,0.8rem)] transition-colors duration-300 hover:text-accent"
                                            >
                                                <Icon className="text-[15px] text-paper/45 transition-colors group-hover:text-accent" />

                                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
                                                    {label}
                                                </span>

                                                <span className="hidden truncate text-xs text-paper/50 transition-colors group-hover:text-accent min-[400px]:block">
                                                    {value}
                                                </span>

                                                <FiArrowUpRight className="text-sm transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                            </a>
                                        </MotionItem>
                                    );
                                },
                            )}
                        </MotionStagger>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="flex shrink-0 flex-col gap-3 pb-[env(safe-area-inset-bottom)] pt-4 sm:flex-row sm:items-center sm:justify-between">
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

                {/* CONTACT CHOICE DIALOG (fixed, out of the layout flow) */}
                {contactChoiceOpen && (
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="contact-choice-title"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
                        onClick={() => setContactChoiceOpen(false)}
                    >
                        <div
                            className="max-h-[90dvh] w-full max-w-md overflow-y-auto border border-paper/20 bg-ink p-6 text-paper"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex items-start justify-between gap-6">
                                <div>
                                    <p
                                        className={`${mono.className} text-[9px] uppercase tracking-[0.25em] text-accent`}
                                    >
                                        Let&apos;s talk
                                    </p>
                                    <h3
                                        id="contact-choice-title"
                                        className={`${serif.className} mt-3 text-3xl leading-none`}
                                    >
                                        Choose a way to reach me.
                                    </h3>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setContactChoiceOpen(false)}
                                    aria-label="Close contact options"
                                    className="text-paper/50 transition-colors hover:text-paper"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="mt-7 grid gap-3">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="border border-paper/20 px-4 py-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                                >
                                    Email me · {EMAIL}
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/moiz-latif-872414253/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-paper/20 px-4 py-3 text-[10px] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
                                >
                                    Message me on LinkedIn
                                </a>
                            </div>

                            <button
                                type="button"
                                onClick={() => setContactChoiceOpen(false)}
                                className="mt-5 text-[9px] uppercase tracking-[0.2em] text-paper/45 transition-colors hover:text-paper"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}