import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './_components/Header'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL || 'https://aarplumbing.com.au/',
  ),
  title: 'AAR Plumbing',
  description:
    'Local Plumber Rhett serving Morwell and the surrounding area, with over 30 years of experience in the industry, with top-quality service.',
  openGraph: {
    title: 'AAR Plumbing',
    description:
      'Local Plumber Rhett serving Morwell and the surrounding area, with over 30 years of experience in the industry, with top-quality service.',
    url: 'https://aarplumbing.com.au',
    siteName: 'AAR Plumbing',
    images: [
      {
        url: '/images/meta-image.jpg',
        width: 1200,
        height: 657,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
