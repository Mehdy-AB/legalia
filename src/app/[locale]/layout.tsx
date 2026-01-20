import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing, isRtlLocale } from '@/i18n/routing'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'LegalAI - Smart Legal Platform',
    description: 'An intelligent legal platform combining advanced legal analysis, precise drafting, and visual representation of facts',
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params

    // Validate that the incoming locale is valid
    if (!routing.locales.includes(locale as typeof routing.locales[number])) {
        notFound()
    }

    // Enable static rendering
    setRequestLocale(locale)

    // Get messages for the current locale
    const messages = await getMessages()

    const dir = isRtlLocale(locale) ? 'rtl' : 'ltr'

    return (
        <html lang={locale} dir={dir}>
            <body className={`${inter.className} min-h-screen bg-white text-gray-800`}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
