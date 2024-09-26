import localFont from "next/font/local";
import Footer from './components/Footer/page';
import Header from "./components/Header/page";
import "./globals.css";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "AI Text to Human Text Converter",
  description: "Unlock the power of AI with our innovative Ai Text to Human Text Converter, designed to transform robotic AI-generated content into engaging, human-like writing. Enhance readability and boost productivity with our easy-to-use tool ai to human text. Ideal for content creators, marketers, and anyone seeking to elevate their written communication. Discover the future of content generation today!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
