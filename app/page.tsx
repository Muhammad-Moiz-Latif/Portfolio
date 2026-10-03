import NavBar from "@/app/components/nav";
import Hero from "@/app/components/hero";
import { archivo } from "@/app/fonts";

export default function Home() {
  return (
    <main
      className={`flex h-dvh flex-col overflow-hidden bg-paper text-ink ${archivo.className}`}
    >
      <NavBar />
      <Hero />
    </main>
  );
}