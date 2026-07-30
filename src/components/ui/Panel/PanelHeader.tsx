import { ReactNode } from 'react';

type PanelHeaderProps = {
  title?: string;
  children?: ReactNode;
};

export function PanelHeader({ title }: PanelHeaderProps) {
  return (
    <div className="flex justify-between items-center p-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      <img src="/images/panel-header-icon.webp" alt="Panel header image" width={24} height={24} />
    </div>
  );
}