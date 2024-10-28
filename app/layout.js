import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add the specific weights you need

});

export const metadata = {
  title: "Elite Group Holding",
  description: "Elite Group Holding is a diversified business leader in the UAE, specializing in automotive, real estate & contracting, investments, and e-commerce. Committed to innovation and sustainability, we drive growth and deliver excellence across multiple industries in the Middle East region. Explore our world-class services and partnerships that shape the future of business.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
