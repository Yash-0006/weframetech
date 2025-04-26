import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Link } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"], weight :["400", "500" ,"600", "700"]
});

export const metadata = {
  title: "weFrameTech",
  description: "Round 2 Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased bg-[var(--background)]`}
      >  
       {/*placed navbar here for visibility in all pages*/}
      <Navbar />
        <main className={`min-h-screen bg-[var(--background)] transition-all duration-300 ease-in-out 
  md:ml-[33%] lg:ml-[20%] sm:ml-[12%] ml-[10%]`}>  
        {children}
        </main>
      </body>
    </html>
  );
}
