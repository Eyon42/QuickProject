import { Loader2 } from "lucide-react";

import type { ButtonProps } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

type LoadingButtonProps = ButtonProps & {
  loading?: boolean;
  spinnerClassName?: string;
};
export function LoadingButton({
  loading,
  children,
  spinnerClassName,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {children}
      {loading ? (
        <Loader2
          className={"mr-2 h-4 w-4 animate-spin " + (spinnerClassName || "")}
        />
      ) : null}
    </Button>
  );
}

export default LoadingButton;
