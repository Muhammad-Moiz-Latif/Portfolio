import Hero from "@/app/components/hero";
import { archivo } from "@/app/fonts";
import About from "./components/about";
import Work from "./components/featured-work";
import Capabilities from "./components/capabilities";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main
      className={`flex min-h-dvh flex-col overflow-x-hidden bg-paper text-ink ${archivo.className}`}
    >
      <Hero />
      <About />
      <Capabilities />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}