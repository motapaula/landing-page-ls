import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StyledComponentsRegistry from "@/lib/registry";

const nunitoSans = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
}

);


export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Recursos de saúde voltados para o cuidado da comunidade LGBTQIAP+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        
      </body>
    </html>
  );
}
