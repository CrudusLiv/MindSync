import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({
  className,
  glass = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & { glass?: boolean }) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        glass ? "glass shadow-soft" : "bg-white shadow-soft",
        className
      )}
      {...props}
    />
  );
}
