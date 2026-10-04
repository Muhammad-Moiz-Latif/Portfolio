const links = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function NavBar() {
    return (
        <header className="shrink-0 px-6 pt-6 lg:px-14 lg:pt-8">
            <nav
                className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-ink/15 pb-5 lg:pb-6"
                aria-label="Primary"
            >
                <a
                    href="#home"
                    className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ink sm:text-xs"
                >
                    M. Moiz Latif
                </a>

                <p className="hidden text-[11px] uppercase tracking-[0.28em] text-muted sm:block sm:text-xs">
                    Full-Stack · Systems · Islamabad
                </p>

                <div className="col-start-3 flex items-center justify-end gap-7 sm:gap-9">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink transition-colors duration-300 hover:text-accent sm:text-xs"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}