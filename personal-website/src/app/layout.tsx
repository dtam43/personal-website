import '@/app/globals.css';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'OLLI — CHEER',
  description: 'Developed by Team 11 for SE 3350B'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full h-full">
          <div className="mx-12">
            <div className="my-10">
              <main>{children}</main>
            </div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
