import type { Metadata } from 'next';
import { Fredoka, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import AnnouncementBar from '@/components/AnnouncementBar';
import BackToTop from '@/components/BackToTop';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { business } from '@/data/business';
import './globals.css';

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://example.com'; // Confirm with business owner and replace with the real domain.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nature's Brew Co. | Smoothies, Fresh Juices & Coffee",
  description:
    'Discover fresh smoothies, juices, coffee, breakfast favourites and convenient grab-and-go food at Nature’s Brew Co.',
  keywords: [
    'smoothies',
    'fresh juice',
    'coffee',
    'juice bar',
    'smoothie bar',
    'Alice Springs',
    "Nature's Brew Co.",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: "Nature's Brew Co. | Smoothies, Fresh Juices & Coffee",
    description:
      'Discover fresh smoothies, juices, coffee, breakfast favourites and convenient grab-and-go food at Nature’s Brew Co.',
    siteName: "Nature's Brew Co.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nature's Brew Co. | Smoothies, Fresh Juices & Coffee",
    description:
      'Discover fresh smoothies, juices, coffee, breakfast favourites and convenient grab-and-go food at Nature’s Brew Co.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: business.name,
  description: business.description,
  servesCuisine: ['Smoothies', 'Fresh Juice', 'Coffee'],
  url: siteUrl,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable}`}>
      <body className="bg-background font-body text-foreground">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <BackToTop />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
