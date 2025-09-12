import { Barlow } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the specific weights you need

});

export const metadata = {
  title: "Elite Group Holding UAE | Automotive Industry Leaders in the UAE",
  description: "Explore Elite Group Holding, a diversified leader in automotive, real estate, investments, and e-commerce. Driving growth and innovation across the UAE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LYF1R4R4F9"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LYF1R4R4F9');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
