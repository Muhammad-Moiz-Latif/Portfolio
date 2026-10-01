import Hero from "./components/hero"

export default function Home() {
  return (
    <main className="h-dvh flex-none pt-10">
      <div className="h-[calc(100dvh-2.5rem)] overflow-hidden">
        <Hero />
      </div>
    </main>
  )
}