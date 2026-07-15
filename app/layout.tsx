import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: "Tanaka's Sushi & Juice Bar - Fresh Food in Alice Springs",
  description:
    'Order fresh sushi and juice online. Made daily at Yeperenye Centre, Alice Springs.',
  keywords: 'sushi, juice, Alice Springs, food delivery, Japanese cuisine',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
