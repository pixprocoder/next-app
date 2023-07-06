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
      <body>{children}</body>
    </html>
  );
}
