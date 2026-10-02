"use client";

import { useEffect, useState } from "react";

const links = [
    { label: "Work", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function NavBar() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header className="absolute inset-x-0 top-0 z-[100] px-6 py-6 md:px-10">
            <nav className="mx-auto flex max-w-[1440px] items-center justify-between">

                {/* LOGO */}
                <a
                    href="#home"
                    aria-label="Moiz Latif, home"
                    className="group flex items-center gap-3"
                >
                    <span className="flex size-9 items-center justify-center rounded-full border border-ink/20 text-[10px] font-bold tracking-[-0.04em] transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                        ML
                    </span>

                    <span className="hidden text-sm font-medium tracking-[-0.02em] sm:block">
                        Moiz Latif
                    </span>
                </a>

                {/* DESKTOP NAV */}
                <div className="hidden items-center gap-9 md:flex">
                    {links.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="group flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                        >
                            <span className="text-[9px] text-ink/30">
                                0{index + 1}
                            </span>

                            <span className="relative">
                                {link.label}
                                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                            </span>
                        </a>
                    ))}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    onClick={() => setOpen((value) => !value)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? "Close menu" : "Open menu"}
                    className="relative flex size-10 items-center justify-center rounded-full border border-ink/15 md:hidden"
                >
                    <span
                        className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "rotate-45" : "-translate-y-1"
                            }`}
                    />

                    <span
                        className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${open ? "-rotate-45" : "translate-y-1"
                            }`}
                    />
                </button>
            </nav>

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                inert={!open}
                className={`mx-auto mt-4 max-w-[1440px] overflow-hidden rounded-2xl border border-ink/10 bg-paper/90 backdrop-blur-xl transition-all duration-300 md:hidden ${open
                        ? "max-h-[22rem] opacity-100"
                        : "pointer-events-none max-h-0 opacity-0"
                    }`}
            >
                <div className="p-5">
                    {links.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-between border-b border-ink/10 py-4 last:border-b-0"
                        >
                            <span className="text-2xl font-medium tracking-tight">
                                {link.label}
                            </span>

                            <span className="text-xs text-muted">
                                0{index + 1}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
}