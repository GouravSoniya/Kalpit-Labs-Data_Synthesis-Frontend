import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/Preloader";

const serif = Noto_Serif({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const sans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });
const deva = Noto_Serif_Devanagari({ subsets: ["devanagari"], variable: "--font-deva" });

export const metadata: Metadata = {
  title: "Kalpit Labs | An Indian lab for imagined data",
  description:
    "Kalpit Labs is an applied AI lab exploring synthetic data, simulation and adversarial methods for teams building AI systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${deva.variable}`}>
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}