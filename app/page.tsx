import Hero from "./components/hero"

export default function Home() {
  return (
    <main id="home" className="h-dvh flex-none p-0 md:p-0">
      <div className="h-dvh overflow-hidden">
        <Hero />
      </div>
    </main>
  )
}