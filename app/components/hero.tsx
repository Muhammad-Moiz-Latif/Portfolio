import TechHalo from "./ui/halo";
import moiz from '@/app/assets/mock-me.png';
import Image from 'next/image';

export default function Hero() {
    return (
        <main className="w-full h-screen bg-zinc-200">
            {/* CONTENT */}
            <div>
                <TechHalo />

            </div>
            <Image
                alt="Moiz"
                src={moiz}
                className="object-contain size-full"
            />
        </main>
    )
}