import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About | Yasin Walum",
  }

export default function AboutLayout({
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
