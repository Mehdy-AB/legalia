import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LegalAI - Smart Legal Platform',
  description: 'An intelligent legal platform combining advanced legal analysis, precise drafting, and visual representation of facts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}