export default function HeadingsPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen w-full bg-background">{children}</div>;
}
