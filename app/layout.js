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
  title: "AI To Human Text Converter - ai to human text",
  description:
    "ai to human text content into human-like, engaging writing with our AI Text to Human Text Converter. Ideal for content creators, marketers, and anyone looking to elevate their content Convert AI To Human Text Now.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Basic SEO Meta Tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Convert AI-generated text into human text, engaging writing with our AI Text to Human Text Converter. Ideal for content creators, marketers, and anyone looking to elevate their content."
        />
        <meta
          name="keywords"
          content="ai to human text,ai to human text converter, ai to human text hindi language,Convert AI To Human Text Now, Humanize AI text, AI To Human Text Converter, Humanize AI Text Now, AI Text to Human Text Converter, AI to human text, content conversion tool, improve writing, AI text, human-like text, content creation, text generation, AI writing tool"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta property="og:title" content="AI Text to Human Text Converter - Boost Your Writing with AI" />
        <meta
          property="og:description"
          content="Convert AI-generated content into human-like writing with our AI Text to Human Text Converter. Ideal for content creators and marketers."
        />
        <meta property="og:image" content="/path/to/your/image.jpg" />
        <meta property="og:url" content="https://www.aitohumantextconvertor.online/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Text to Human Text Converter - Boost Your Writing with AI" />
        <meta
          name="twitter:description"
          content="Enhance your content creation process with our AI to Human Text Converter. Perfect for marketers and writers."
        />
        <meta name="twitter:image" content="/path/to/your/image.jpg" />

        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="NxecJ-4yVr49rQWpDEUazLB2qEgg9srS1fH95mJEEK0"
        />

        {/* Structured Data (Schema.org) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AI Text to Human Text Converter",
              "description":
                "Convert AI-generated text into human text with this powerful tool | Humanize AI Content | Bypass AI Detection.",
              "operatingSystem": "All",
              "applicationCategory": "Text editor",
              "url": "https://www.aitohumantextconvertor.online/",
              "author": {
                "@type": "Organization",
                "name": "Ai to human text converter",
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
              },
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQPPS7D03S"
        ></script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZQPPS7D03S');
            `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>
          {/* <h1>AI Text to Human Text Converter</h1>
          <p>
            Unlock the power of our AI Text to Human Text Converter. This tool
            helps you easily transform robotic, AI-generated content into
            natural, human-like text. Whether you're a content creator,
            marketer, or writer, this tool can save you time and elevate your
            content.
          </p>
          <h2>Why Choose Our AI to Human Text Converter?</h2>
          <p>
            Our AI Text to Human Text Converter is designed to help you create
            more engaging, readable, and human-like content from AI-generated
            text. It's perfect for anyone who wants to improve their content's
            readability and effectiveness.
          </p> */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
