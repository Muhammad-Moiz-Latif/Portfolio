export default function NavBar() {
    return (
        <nav className="w-full h-10">
            <section className="size-full flex items-center justify-between">
                <h1>Logo</h1>
                <ul className="flex justify-center items-center gap-10">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Services</li>
                </ul>
                <button>Contact</button>
            </section>

        </nav>
    )
}