import './globals.css';
import Chrome from '@/components/Chrome';
import Footer from '@/components/Footer';
import ImageFallback from '@/components/ImageFallback';

export const metadata = {
  title: 'Marrow — Hand-selected cuts, dry-aged with care',
  description: 'Hand-selected cuts, dry-aged with patience, butchered by craft.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Chrome />
        {children}
        <Footer />
        <ImageFallback />
      </body>
    </html>
  );
}
