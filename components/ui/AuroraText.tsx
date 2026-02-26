import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
}

export function AuroraText({ children, className }: AuroraTextProps) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent animate-aurora",
        "bg-[linear-gradient(to_right,var(--accent-primary),var(--accent-secondary),#FF0080,var(--accent-primary))]",
        "bg-[length:200%_auto]",
        className,
      )}
    >
      {children}
    </span>
  );
}
