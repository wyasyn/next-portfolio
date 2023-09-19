import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Portfolio | Yasin Walum",
  }

export default function PortfolioPageLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <>
        {children}
    </>
  )
}
