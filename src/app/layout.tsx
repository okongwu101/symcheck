import Providers from '@/utils/jotaiProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Symcheck',
  description: 'Symptoms and diagnosis checker',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Providers>
            {children}
          </Providers>
        </MantineProvider>





      </body>
    </html>
  )
}
