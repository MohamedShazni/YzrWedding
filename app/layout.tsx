import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yazar & Shimasha | Waleema Ceremony",
  description:
    "With joyful hearts, Yazar and Shimasha invite you to their Waleema ceremony on 26 December 2026 at Thaniya Reception Hall.",
  openGraph: {
    title: "Yazar & Shimasha | Waleema Ceremony",
    description:
      "Join Yazar and Shimasha for their Waleema ceremony on 26 December 2026 at Thaniya Reception Hall.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
