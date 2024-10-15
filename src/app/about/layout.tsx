export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-5xl m-auto">
      <div className="min-h-screen m-auto flex pt-[48px]">{children}</div>
    </main>
  );
}
