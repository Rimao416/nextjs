import "./globals.css";
import Header from "@/components/header";

export const metadata = {
  title: "Next.js Course",
  description: "Generated by Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
