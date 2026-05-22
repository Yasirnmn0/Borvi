interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-6 ${className}`}>
      {children}
    </div>
  );
}
