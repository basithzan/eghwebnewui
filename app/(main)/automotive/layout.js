// app/layout.js or app/layout.tsx
import Head from 'next/head';
import { headers } from 'next/headers';

export const metadata = {
  title: "Elite Group Holding Automotive | Automotive & Mobility Excellence",
  description:
    "Elite Automotive, part of Elite Group Holding, offers innovative solutions in the UAE automotive industry. Explore our services today.",
};

export default function RootLayout({ children }) {
  const headersList = headers();
  const host = headersList.get('host');
  const protocol = headersList.get('x-forwarded-proto') || 'http';
  const path = headersList.get('x-nextjs-rewrite') || '';
  const canonicalUrl = `${protocol}://${host}${path}`;

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
