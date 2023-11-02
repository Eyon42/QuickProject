import * as React from "react";

import { cn } from "@/lib/utils";
import type { TextareaAutosizeProps } from "react-textarea-autosize";
import TextareaAutosize from "react-textarea-autosize";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <TextareaAutosize
      className={cn(
        "flex w-full resize-none border-0 border-b-2 border-primary border-opacity-10 bg-background2 px-0 py-2 text-2xl leading-4 outline-none transition-all transition-all placeholder:text-slate-500 focus-visible:border-primary focus-visible:border-opacity-80 focus-visible:outline-none  focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
        // "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ",
        "dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
