import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "success" | "danger" | "disabled";
};

const variantClasses = {
  primary: "bg-primary text-white",
  success: "bg-success text-white",
  danger: "bg-danger text-white",
  disabled: "bg-disabled text-white"
};

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border px-4 py-2 text-sm font-medium shadow-sm transition ${variantClasses[variant]} ${className ?? ""}`.trim()}
    >
      {children}
    </button>
  );
}