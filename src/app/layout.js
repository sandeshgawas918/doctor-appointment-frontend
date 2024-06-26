import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment Booking",
  description: "Developed by Sandesh Gawas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="">
          <Header />
          {children}
          <Toaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}
