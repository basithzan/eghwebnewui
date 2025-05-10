export const metadata = {
  title: "Elite Group of Companies in Dubai & UAE",
  description: "Discover Elite Group's companies in Dubai, Sharjah, and across the UAE. Innovating in automotive, real estate, e-commerce and investments.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}