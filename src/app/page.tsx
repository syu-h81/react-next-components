import { Card } from "@/app/components/ui/Card";

export default function Home() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Next.jsコンポーネントライブラリ</h2>
        <p className="mt-2 text-xl text-zinc-700">モダンで使いやすい UI コンポーネント集</p>
      </div>

      <Card />
    </div>
  );
}
