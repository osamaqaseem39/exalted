type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return <div className={`flex min-h-screen flex-col bg-white text-black ${className}`.trim()}>{children}</div>;
}
