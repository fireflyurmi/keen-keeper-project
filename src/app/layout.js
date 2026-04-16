import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "@/lib/providers";                    

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "KeenKeeper",
  description: "Keep Your Friendships Alive",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-gray-50 text-slate-900">
        <Navbar />
        <Toaster position="top-right"/>
        
        <Providers>           
          <main className="grow">
            {children}
          </main>
        </Providers>

        <Footer/>
      </body>
    </html>
  );
}