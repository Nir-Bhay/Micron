import { cn } from "@/lib/utils";
import { CSSProperties, FC, ReactNode } from "react";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
}) => {
  return (
    <p
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50",
        // Shimmer effect
        "animate-shimmer bg-clip-text bg-no-repeat [background-size:var(--shimmer-width)_100%] transition-[background-position]",
        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
        className,
      )}
    >
      {children}
    </p>
  );
};
