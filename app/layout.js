import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "/Components/navbar/Navbar";
import Footer from "/Components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SI BRILIAN",
  description: "Developed by Hamizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
