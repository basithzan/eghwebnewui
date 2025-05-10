import Head from 'next/head';
import { headers } from 'next/headers';

export const metadata = {
  title: "Elite Group Holding Real Estate  | Building Prestigious Lifestyle",
  description: "Elite Group Holding manages a diverse portfolio of commercial, residential, and retail properties across the UAE, redefining the future of real estate in the UAE.",
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
        {/* <link rel="canonical" href={canonicalUrl} /> */}
        <link rel="canonical" href="https://elitegroupholding.com/group-of-companies/elite-real-estate" />

      </Head>
      <body>{children}</body>
    </html>
  );
}
