import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
      px-6
      py-3
      rounded-full
      bg-neutral-900
      text-white
      hover:bg-neutral-700
      transition-all
      duration-300
      "
    >
      {children}
    </button>
  );
}