import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-4 font-medium transition-all duration-300 hover:-translate-y-0.5";

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-700",

    secondary:
      "border border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}