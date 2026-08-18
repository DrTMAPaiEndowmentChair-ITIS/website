import * as React from "react";

import { cn } from "@/lib/utils";

type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

/**
 * Minimal asChild/slot helper — merges className onto a single element child.
 * Avoids pulling in @radix-ui/react-slot for a one-line composition pattern.
 */
export function Slot({ children, className, ...props }: SlotProps) {
  if (!React.isValidElement<{ className?: string }>(children)) {
    throw new Error("Slot expects a single React element child");
  }

  return React.cloneElement(children, {
    ...props,
    ...children.props,
    className: cn(className, children.props.className),
  });
}
