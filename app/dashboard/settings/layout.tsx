export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (

        <div>
          <h2>Setting Dashboard</h2>
          {children}
        </div>
    );
  }
  