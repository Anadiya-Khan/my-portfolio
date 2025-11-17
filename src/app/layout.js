import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar.js";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anadiya khan",
  description: "Anadiyakhan Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
         className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 min-h-screen"
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
