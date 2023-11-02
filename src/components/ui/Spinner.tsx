import { cn } from "@/lib/utils";

export default function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-10 w-10 animate-spin rounded-full border-4 border-primary border-r-primary/20 text-white",
        className
      )}
    ></div>
  );
}
