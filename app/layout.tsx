import cx from "classnames";
import NavBar from "./components/navbar";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Container from "./components/container";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";

export const metadata = {
  title: "Oscar Olotu",
  description: "Personal website of Oscar Olotu",
  metadataBase: "https://oscarolotu.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body className="overflow-x-hidden">
        <Analytics />
        <NavBar />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
