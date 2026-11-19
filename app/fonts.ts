import { Anton, Inter, JetBrains_Mono } from "next/font/google";

// Display: heavy condensed uppercase for the name and section titles.
// Anton ships one weight only, so never pair it with font-bold.
export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

// Body: neutral sans for paragraphs and UI text.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Labels: small mono text (top bar, eyebrows, tags, card numbers).
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const fontVariables = [anton, inter, jetbrainsMono]
  .map((font) => font.variable)
  .join(" ");
