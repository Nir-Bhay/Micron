import { cn } from "@/lib/utils";

interface TerminalProps {
  className?: string;
  children: React.ReactNode;
}

export function Terminal({ className, children }: TerminalProps) {
  return (
    <div
      className={cn(
        "z-0 h-full w-full rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
    >
      <div className="flex flex-col gap-y-2 border-b p-4">
        <div className="flex flex-row gap-x-2">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
          <div className="h-2 w-2 rounded-full bg-green-500"></div>
        </div>
      </div>
      <pre className="p-4">
        <code className="grid gap-y-1 overflow-auto">{children}</code>
      </pre>
    </div>
  );
}

export function AnimatedSpan({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span
      style={{
        animationDelay: `${delay}ms`,
      }}
      className={cn(
        "animate-fade-in text-xs text-muted-foreground opacity-0 fill-mode-forwards",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TypingAnimation({
  children,
  className,
  duration = 60,
  delay = 0,
  as: Component = "span",
}: {
  children: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: React.ElementType;
}) {
  const MotionComponent = Component;

  return (
    <MotionComponent
      className={cn(
        "font-mono text-sm tracking-tight animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-transparent pr-1",
        className,
      )}
      style={{
        "--duration": `${duration}ms`,
        "--delay": `${delay}ms`,
        animationDuration: `${children.length * duration}ms`,
        animationDelay: `${delay}ms`,
        width: "0",
        animationFillMode: "forwards",
      } as React.CSSProperties}
    >
       {children}
    </MotionComponent>
  );
}
