import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Z",
  description: "Social Media Z",
  icons: '/logo.png'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
