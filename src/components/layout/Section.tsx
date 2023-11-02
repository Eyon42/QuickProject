import { cn } from "@/lib/utils";
import { type FC } from "react";
import type { ClassNameValue } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  id: string;
  className?: ClassNameValue;
}
const Section: FC<SectionProps> = ({ children, id, className }) => {
  return (
    <div
      id={id}
      className={cn(
        "flex  w-full flex-col items-center justify-between px-5 py-5 md:py-20 lg:px-[100px] 2xl:px-[300px]",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Section;
