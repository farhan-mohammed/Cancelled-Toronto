import type { Metadata } from 'next';
import { Noto_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ttcBold } from '@/fonts';

const noto = Noto_Serif({
    subsets: ['latin'],
    variable: '--font-noto',
});

export const metadata: Metadata = {
    title: 'Cancelled Toronto',
    openGraph: {
        images: ['/images/Relief Line/Relief Line Map.png'],
        title: 'Cancelled Toronto.',
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${ttcBold.variable} ${noto.variable}`}>
            <link rel="icon" href="/images/thumb.png" type="image/png" sizes="any" />
            <link rel="apple-touch-icon" href="/images/thumb.png" type="image/png" sizes="any" />
            <body className={noto.className}>
                <div className="container mx-auto">
                    <Header />
                    <main className="px-4 sm:px-0">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
