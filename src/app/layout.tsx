import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ProgressBar'; // Ensure default import

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Add 'variable'

export const metadata: Metadata = {
  title: 'Ayushi - Portfolio',
  description: 'My personal portfolio showcasing my projects and skills.',
  // ... other metadata
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}> {/* Apply the variable class to <html> */}
      <body className="dark cursor-default"> {/* Keep other body classes */}
        <div className="app"> {/* Optional: Add a wrapper div if needed for layout */}
          <ScrollProgress />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}