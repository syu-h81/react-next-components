import type { ReactNode } from "react";

type CardProps = {
  title?: string;
  children?: ReactNode;
};

export function Card({ title, children }: CardProps) {
  return (
    <section className="w-full max-w-full rounded-lg border border-zinc-300 bg-white p-6 shadow-md">
      {title ? <h3 className="mb-4 text-lg font-semibold text-zinc-900">{title}</h3> : null}
      <div>{children}</div>
    </section>
  );
}