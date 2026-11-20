import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import "./globals.css";
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" >
        <header className="flex items-center justify-between px-6 py-3 text-shadow-black bg-gray-100 border-b border-b-olive-600">
          <div className="flex items-center gap-2">
            
            <Image src="/icon-upiicsa.png" className="h-15 w-auto"
            width={100}
            height={76}
            alt="logo upiicsa"
            />
          </div>
            <h1 className="text-3xl font-light"> <center> Servicios bibliotecarios</center> </h1>
            <div className="h-12 w-auto">
              <Image src="/logo-biblioteca.PNG"  className="h-13 w-auto"
                  width={100}
                  height={76}
                  alt="logo biblioteca"
                  />

            </div>
          </header>
          {children}
            <Footer/>

      </body>
    </html>
  );
}
