import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Flexible",
  description:
    "Showcase and discover creative work on the world's leading online platform for creative industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
