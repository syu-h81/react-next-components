import Image from 'next/image'; 

type AvatarIconProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  name?: string;
}

export function AvatarIcon({ src, alt = 'Avatar', width = 40, height = 40, name }: AvatarIconProps) {
  if (!src) {
    return (
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-200 font-bold text-zinc-700">
        {name || 'AV'}
      </span>
    );
  }

  return (
    <div className="w-full">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full object-cover"
      />
    </div>
  )
}
