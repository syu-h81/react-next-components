import { ReactNode } from 'react';
import { Button } from '../Button';

type PanelFooterProps = {
  text?: string;
  children?: ReactNode;
};

export function PanelFooter({ text, children }: PanelFooterProps) {
  return (
    <div className="bg-gray-100 px-4 py-2">
      <div className="flex items-center justify-end gap-4">
        <p className="text-gray-500 text-sm">キャンセル</p>
        <Button variant="primary">保存</Button>
      </div>
    </div>
  );
}