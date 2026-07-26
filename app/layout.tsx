import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cinzel.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}