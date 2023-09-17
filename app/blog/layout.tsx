import { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Blogs | Yasin Walum",
  }

export default function BlogPageLayout({
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
