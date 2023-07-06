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
      <body>
        <h1 className="bg-green-100">header</h1>
        <main>{children}</main>
        <h1 className="bg-green-200">Footer</h1>
      </body>
    </html>
  );
}
