import { ReactNode } from 'react';
import { PanelHeader } from './PanelHeader';
import { PanelBody } from './PanelBody';
import { PanelFooter } from './PanelFooter';

type PanelProps = {
  title?: string;
  children?: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md">
      <PanelHeader title={title} />
      <PanelBody>
        これはパネルの本文です。パネルは、情報を整理して表示するためのコンポーネントです。
      </PanelBody>
      <PanelFooter />
    </div>
  );
}