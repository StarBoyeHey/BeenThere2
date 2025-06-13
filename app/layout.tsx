import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KyaSeen - Kya Scene Hai? Your Career Insights Hub',
  description: 'Discover the real scene behind tech interviews! Get authentic insights, preparation tips, and experiences from seniors across all colleges. Kya scene hai in your dream company?',
  keywords: 'campus placement, interview preparation, student insights, career guidance, off-campus placement, college experiences, tech interviews',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}