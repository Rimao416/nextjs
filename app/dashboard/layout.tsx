export const metadata = {
  title: "Dashboard",
  description: "Generated by Next.js",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      {children}
    </div>
  );
}
