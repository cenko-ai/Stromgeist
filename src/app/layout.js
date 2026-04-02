import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stromgeist – Energie verstehen, Geld sparen",
  description: "Strompreise, PV-Anlagen, Tarife und Heimspeicher – erklärt von einem Portfoliomanager, der den Energiemarkt von innen kennt.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
