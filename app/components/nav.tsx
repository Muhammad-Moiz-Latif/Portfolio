"use client";

import { useEffect, useState } from "react";

const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("#home");

    // Background + border after scrolling
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the section currently in view
    useEffect(() => {
        const sections = links
            .map((l) => document.querySelector(l.href))
            .filter((el): el is Element => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(`#${e.target.id}`);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    // Close mobile menu on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[100] border-b text-ink transition-colors duration-300 ${scrolled || open
                ? "border-ink/10 bg-paper/80 backdrop-blur-md"
                : "border-transparent"
                }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-9 md:grid md:grid-cols-[1fr_auto_1fr]">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-semibold tracking-tight"
                    aria-label="Moiz Latif, home"
                >
                    ML<span className="text-accent">.</span>
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-10 md:flex">
                    {links.map((link) => {
                        const isActive = active === link.href;
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={`group relative py-1 text-sm uppercase tracking-[0.15em] transition-colors hover:text-ink ${isActive ? "text-ink" : "text-muted"
                                        }`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${isActive
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Right side */}
                <div className="flex justify-end">
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors duration-300 hover:bg-accent md:inline-flex"
                    >
                        Contact
                    </a>

                    {/* Mobile toggle */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Close menu" : "Open menu"}
                        className="relative size-10 md:hidden"
                    >
                        <span
                            className={`absolute left-2 top-[17px] h-px w-6 bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`absolute left-2 top-[23px] h-px w-6 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                inert={!open}
                className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
                        {[...links, { label: "Contact", href: "#contact" }].map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="block border-b border-ink/10 py-3 text-2xl uppercase tracking-tight"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}