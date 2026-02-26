import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        "auto-rows-[22rem]",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  children, // For custom content/children like BorderBeam
}: {
  name: string;
  className?: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta: string;
  children?: ReactNode;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-card border border-white/5", // Use token-based card color
      "[box-shadow:inset_0_1px_0_0_rgba(255,255,255,0.04),0_-20px_80px_-20px_rgba(255,255,255,0.06)_inset]", // Inner glow
      "transform-gpu transition-all duration-300 hover:scale-[1.02]", // Physics
      "hover:border-white/10 hover:shadow-[0_0_30px_var(--glow-blue)]", // Hover effect
      className,
    )}
  >
    {/* Background Content */}
    <div>{background}</div>

    {/* Foreground Content */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
      {Icon && (
        <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75 mb-2" />
      )}
      <h3 className="text-xl font-semibold text-primary">
        {name}
      </h3>
      <p className="max-w-lg text-secondary">{description}</p>
    </div>

    {/* CTA (Hidden until hover) */}
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <a
        href={href}
        className="pointer-events-auto ml-2 flex items-center gap-1 text-sm font-medium text-primary"
      >
        {cta}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-2 h-4 w-4"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />

    {children}
  </div>
);

export { BentoCard, BentoGrid };
