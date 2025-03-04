import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { MobileNav } from "./components/MobileNav";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aquiras Solutions",
  description: "Leading IT Solutions & Services Provider",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
      <nav className="w-full md:w-auto bg-black/50 backdrop-blur-sm rounded-full border border-gray-800/50">
        <div className="px-4 py-2 md:px-5 md:py-2.5 flex items-center justify-between md:justify-center gap-6 md:gap-12">
          <Link 
                href="/" 
                className="text-[#60a5fa] font-bold text-base hover:text-[#60a5fa]/90 transition-colors"
              >
                Aquiras
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-6">
                  <Link href="/#why-us" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                    Why Us
                  </Link>
                  <Link href="/about-us" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                  <Link href="/#works" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                    Works
                  </Link>
                  <Link href="/#services" className="text-[13px] text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  
                </div>
              </div>

              <Link 
                href="/contact"
                className="hidden md:block bg-neutral-800 px-4 py-1.5 rounded-full text-[13px] text-white hover:bg-neutral-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Let's Talk
              </Link>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
