import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Panel } from "@/components/ui/Panel";
import { Badge } from "@/components/ui/Badge";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Next.jsコンポーネントライブラリ</h2>
        <p className="mt-2 text-xl text-zinc-700">モダンで使いやすい UI コンポーネント集</p>
      </div>

      {/* ↓↓↓↓↓ ここにコンポーネントを追加していく ↓↓↓↓↓ */}
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 mt-8">
        {/* Buttonコンポーネント */}
        <Card title="Button">
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="primary">Primary Button</Button>
            <Button variant="success">Success Button</Button>
            <Button variant="danger">Danger Button</Button>
          </div>
          <div className="mt-4">
            <Button variant="disabled">Disabled</Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <Button className="w-14 h-8 text-sm" variant="primary">Small</Button>
            <Button variant="primary">Medium</Button>
            <Button className="w-26 h-12" variant="primary">Large</Button>
          </div>
        </Card>
        {/* Panelコンポーネント */}
         <Card title="Panel">
          <Panel title="パネルタイトル"></Panel>
         </Card>
         {/* Panelコンポーネント */}
        <Card title="Badge">
          <div className="flex flex-wrap items-center gap-2">
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="info">Info</Badge>
            <Badge color="default">Default</Badge>
            <Badge color="新着">新着</Badge>
            <Badge color="人気">人気</Badge>
            <Badge color="おすすめ">おすすめ</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
