import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work — Moiz Latif",
    description:
        "Selected work by Moiz Latif — full-stack systems, real-time applications, commerce platforms and product experiences.",
};

export default function WorkLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
