import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from 'next/image';
import "./globals.css";

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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >



      <body className="min-h-full flex flex-col" >
        <header className="flex items-center justify-between bg-neutral-900 px-6 py-3 text-white">
          <div className="flex items-center gap-4">
          <Image src="/logo-ipn.png" className="h-12 w-auto"
          width={100}
          height={76}
          alt="logo poli"
          />
          <Image src="/icon-upiicsa.png" className="h-12 w-auto"
          width={100}
          height={76}
          alt="logo upiicsa"
          />
     
            </div>

                    <h1 className="text-lg font-medium"> <center> Servicios bibliotecarios</center> </h1>


     <Image src="/logo-biblioteca.PNG" className="h-12 w-auto"
          width={100}
          height={76}
          alt="logo biblioteca"
          />
          </header>

          
        {children}
      

      </body>
    </html>
  );
}
