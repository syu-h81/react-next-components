import { ReactNode } from "react";

type BadgeProps = {
  children?: ReactNode;
  color?: "success" | "warning" | "error" | "info" | "default" | "新着" | "人気" | "おすすめ";
};

export function Badge({ children, color }: BadgeProps) {

  const colorClasses = {
    success: "bg-success text-white",
    warning: "bg-yellow-600 text-black",
    error: "bg-red-600 text-white",
    info: "bg-primary text-white",
    default: "bg-disabled text-white",
    新着: "bg-purple-600 text-white",
    人気: "bg-pink-600 text-white",
    おすすめ: "bg-orange-600 text-white",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-sm font-semibold ${colorClasses[color || "default"]}`}>
      {children}
    </span>
  );
}