import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cause Shop",
  description: "A Marketplace For All Your Needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header/>
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
