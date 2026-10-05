"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { usePathname, useRouter } from "next/navigation";
import { FiStar, FiX, FiArrowUpRight } from "react-icons/fi";
import { mono, serif } from "@/app/fonts";

const links = [
    { label: "About", href: "/#about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/#contact" },
];

const REPO_URL = "https://github.com/Muhammad-Moiz-Latif/Portfolio";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();

    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    // Close the menu whenever the route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Escape to close + lock page scroll while open
    useEffect(() => {
        if (!menuOpen) return;

        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setMenuOpen(false);
        };

        // If the viewport grows past the mobile breakpoint, close the menu
        const mq = window.matchMedia("(min-width: 768px)");
        const onChange = () => {
            if (mq.matches) setMenuOpen(false);
        };

        window.addEventListener("keydown", onKey);
        mq.addEventListener("change", onChange);

        return () => {
            document.body.style.overflow = original;
            window.removeEventListener("keydown", onKey);
            mq.removeEventListener("change", onChange);
        };
    }, [menuOpen]);

    const navigateToHash = (href: string) => {
        const hash = href.slice(href.indexOf("#"));
        const targetId = hash.slice(1);

        const scroll = () => {
            const target = document.getElementById(targetId);

            if (target) {
                const reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                ).matches;

                target.scrollIntoView({
                    behavior: reduceMotion ? "auto" : "smooth",
                    block: "start",
                });

                return true;
            }

            return false;
        };

        if (pathname === "/") {
            window.history.pushState(null, "", href);
            requestAnimationFrame(scroll);
            return;
        }

        router.push(href);

        let attempts = 0;

        const waitForRoute = () => {
            if (scroll() || attempts++ >= 30) return;
            window.setTimeout(waitForRoute, 50);
        };

        window.setTimeout(waitForRoute, 0);
    };

    const handleLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string,
        fromMenu = false,
    ) => {
        const isHash = href.includes("#");

        if (isHash) event.preventDefault();
        if (fromMenu) setMenuOpen(false);

        if (isHash) {
            // Small delay on mobile so the menu closes and scroll unlocks first
            if (fromMenu) {
                window.setTimeout(() => navigateToHash(href), 180);
            } else {
                navigateToHash(href);
            }
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="shrink-0 px-6 pt-6 lg:px-14 lg:pt-8"
        >
            <nav
                className="grid grid-cols-[auto_1fr] items-center border-b border-ink/15 pb-5 md:grid-cols-[1fr_auto_1fr] lg:pb-6"
                aria-label="Primary"
            >
                {/* LEFT — Identity + GitHub (star is desktop only) */}
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.16em] text-ink transition-colors duration-300 hover:text-accent md:text-xs md:tracking-[0.28em]"
                    >
                        M. Moiz Latif
                    </Link>

                    <a
                        href={REPO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Star this portfolio on GitHub"
                        className="group hidden items-center gap-2 text-[10px] font-medium uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-accent md:flex"
                    >
                        <FiStar className="text-[12px] transition-transform duration-300 group-hover:rotate-[72deg] group-hover:fill-current" />

                        <span>Star</span>
                    </a>
                </div>

                {/* CENTER — Positioning */}
                <p className="hidden text-[11px] uppercase tracking-[0.28em] text-muted lg:block lg:text-xs">
                    Full-Stack · Systems · Islamabad
                </p>

                {/* RIGHT — Desktop links */}
                <div className="col-start-3 hidden items-center justify-end gap-10 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap px-0 py-2 text-xs font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:text-accent"
                            onClick={(event) => handleLinkClick(event, link.href)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* RIGHT — Mobile menu button */}
                <div className="col-start-2 flex justify-end md:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="group flex h-10 items-center gap-3 rounded-full border border-ink/25 pl-4 pr-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                        Menu
                        <span aria-hidden className="flex flex-col gap-[3px]">
                            <span className="block h-px w-4 bg-current" />
                            <span className="block h-px w-4 bg-current" />
                        </span>
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU — portaled to <body> so the header's transform can't affect it */}
            {mounted &&
                createPortal(
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                key="mobile-menu"
                                id="mobile-menu"
                                role="dialog"
                                aria-modal="true"
                                aria-label="Site menu"
                                className="fixed inset-0 z-[90] md:hidden"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {/* Backdrop — tap anywhere outside the panel to close */}
                                <button
                                    type="button"
                                    aria-label="Close menu"
                                    onClick={() => setMenuOpen(false)}
                                    className="absolute inset-0 h-full w-full cursor-default bg-ink/55 backdrop-blur-md"
                                />

                                {/* Panel */}
                                <motion.div
                                    className="absolute right-4 top-4 w-[min(88vw,340px)] border border-ink/15 bg-paper text-ink shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
                                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                >
                                    {/* Panel header */}
                                    <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4">
                                        <span
                                            className={`${mono.className} text-[9px] uppercase tracking-[0.25em] text-ink/45`}
                                        >
                                            Menu
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => setMenuOpen(false)}
                                            aria-label="Close menu"
                                            className="flex size-10 items-center justify-center rounded-full border border-ink/25 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                                        >
                                            <FiX className="text-lg" />
                                        </button>
                                    </div>

                                    {/* Links */}
                                    <ul>
                                        {links.map((link, i) => (
                                            <li
                                                key={link.href}
                                                className="border-b border-ink/15"
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={(event) =>
                                                        handleLinkClick(
                                                            event,
                                                            link.href,
                                                            true,
                                                        )
                                                    }
                                                    className="group flex items-center justify-between px-5 py-5 transition-colors duration-300 hover:text-accent"
                                                >
                                                    <span className="flex items-baseline gap-4">
                                                        <span
                                                            className={`${mono.className} text-[9px] text-ink/30 transition-colors group-hover:text-accent`}
                                                        >
                                                            {String(i + 1).padStart(2, "0")}
                                                        </span>

                                                        <span
                                                            className={`${serif.className} text-[2rem] leading-none tracking-[-0.04em]`}
                                                        >
                                                            {link.label}
                                                        </span>
                                                    </span>

                                                    <FiArrowUpRight className="text-lg text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Star on GitHub */}
                                    <a
                                        href={REPO_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setMenuOpen(false)}
                                        className="group flex items-center justify-between px-5 py-4 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/70 transition-colors duration-300 hover:text-accent"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <FiStar className="text-[13px] transition-transform duration-300 group-hover:rotate-[72deg] group-hover:fill-current" />
                                            Star on GitHub
                                        </span>

                                        <FiArrowUpRight className="text-sm" />
                                    </a>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body,
                )}
        </motion.header>
    );
}