import Head from 'next/head';
import { headers } from 'next/headers';

export const metadata = {
  title: "Elite Group Holding Media Centre | News & Updates",
  description: "Stay updated with Elite Group Holding’s latest news, press releases, and media highlights. Explore our achievements and innovations.",
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
