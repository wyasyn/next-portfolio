import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact | Yasin Walum",
  }

export default function ContactPageLayout({
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
