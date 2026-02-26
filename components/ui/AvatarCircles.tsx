"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-3 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <Image
          key={index}
          className="h-10 w-10 rounded-full border-2 border-background object-cover"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      {numPeople && numPeople > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-accent-primary text-center text-xs font-bold text-white hover:opacity-90 transition-opacity"
          href="#"
        >
          +{numPeople}
        </a>
      )}
    </div>
  );
};
