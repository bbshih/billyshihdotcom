import ProgressBar from "@/components/ProgressBar"
import "./globals.css"
import type { Metadata } from "next"
// import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Billy Shih",
  description: "My slice of the internet",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBar />
        <div className="flex justify-center w-full">
          {children}
          {/* <Navigation /> */}
        </div>
      </body>
    </html>
  )
}
