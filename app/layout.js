import localFont from "next/font/local";
import Script from "next/script";
import Footer from "./components/Footer/page";
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
  description:
    "Unlock the power of AI with our innovative Ai Text to Human Text Converter, designed to transform robotic AI-generated content into engaging, human-like writing. Enhance readability and boost productivity with our easy-to-use tool ai to human text. Ideal for content creators, marketers, and anyone seeking to elevate their written communication. Discover the future of content generation today!",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="NxecJ-4yVr49rQWpDEUazLB2qEgg9srS1fH95mJEEK0"
      />

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZQPPS7D03S"
      ></script>
      <Script 
        dangerouslySetInnerHTML={{
          __html : ` window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-ZQPPS7D03S');
        `,
        }}
      />
       
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
