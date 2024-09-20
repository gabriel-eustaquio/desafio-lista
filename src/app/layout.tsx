import type { Metadata } from "next";
import "@/app/globals.scss";
import { font_body } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Teste Dev Junior Legaplan",
  description: "Utilizando protótipo do figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font_body.className}`}>
        {children}
      </body>
    </html>
  );
}
