import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ahmed Agamy - Software Test Engineer",
  description: "Portfolio and dashboard for Ahmed Agamy, Software Test Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the base path from environment or default to '/CV'
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/CV"

  return (
    <html lang="en">
      <head>
        {/* Ensure proper base path for assets */}
        <base href={basePath} />
      </head>
      <body>{children}</body>
    </html>
  )
}
