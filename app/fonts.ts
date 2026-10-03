import {
    Oswald,
    Archivo,
    Instrument_Serif,
    JetBrains_Mono,
} from "next/font/google";

export const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"] });
export const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600"] });
export const serif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    style: ["normal", "italic"],
});
export const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400"] });