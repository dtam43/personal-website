import '@/app/globals.css';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'David Tam',
  description: 'David Tam\'s personal website.'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="@/favicon.ico" />
      </Head>
      <body>
        <div className="w-full h-full">
          <div className="mx-12">
            <div className="my-10">
              <main>{children}</main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
