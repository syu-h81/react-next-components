import  { ReactNode } from 'react';

type PanelBodyProps = {
  children?: ReactNode;
};

export function PanelBody({ children }: PanelBodyProps) {
  return (
    <div className="border-t border-gray-300 px-4 py-6">
      <p className="text-gray-500">{children}</p>
    </div>
  )
}