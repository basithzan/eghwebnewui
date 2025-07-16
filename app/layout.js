import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the specific weights you need

});

export const metadata = {
  title: "Elite Group Holding Company In UAE",
  description: "Explore Elite Group Holding, a diversified leader in automotive, real estate, investments, and e-commerce. Driving growth and innovation across the UAE.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
