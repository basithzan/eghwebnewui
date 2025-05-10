import Head from 'next/head';
import { headers } from 'next/headers';

export const metadata = {
  title: "About Elite Group Holding | Business Group in Dubai",
  description: "Learn about Elite Group Holding, a pioneering company in Dubai, shaping the future with diverse industries and sustainable growth strategies.",
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
