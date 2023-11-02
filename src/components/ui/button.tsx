import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ChevronLast } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "img-anim hover:ring-4 ring-primary ring-opacity-50 bg-primary text-dark hover:bg-primary/90 dark:bg-dark dark:text-primary dark:hover:bg-dark/90",
        destructive:
          "bg-red-500 text-dark hover:bg-red-500/90 dark:bg-red-900 dark:text-dark dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white hover:primary hover:text-primary dark:border-slate-800 dark:bg-slate-950 dark:hover:secondary dark:hover:text-dark",
        secondary:
          "primary text-primary hover:primary/80 dark:secondary dark:text-dark dark:hover:secondary/80",
        ghost:
          "hover:primary hover:text-primary dark:hover:secondary dark:hover:text-dark",
        link: "text-primary underline-offset-4 hover:underline dark:text-dark",
      },
      size: {
        default: "h-1 px-4 py-4 text-xl leading-normal",
        sm: "h-6 px-3 py-3 text-lg leading-normal",
        lg: "h-11 text-3xl leading-normal px-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, text, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {text ? (
          <div className="h-fit">
            <span className="align-text-top font-bold uppercase">{text}</span>
          </div>
        ) : (
          <></>
        )}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

export const ContinueButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <Button size={"lg"} ref={ref} {...props} text={props.text || "Continuar"}>
        <ChevronLast className="pt-[1px]" />
      </Button>
    );
  }
);
ContinueButton.displayName = "ContinueButton";
