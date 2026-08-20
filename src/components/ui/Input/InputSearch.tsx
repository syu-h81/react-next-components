import Image from 'next/image';

type InputSearchProps = {
  src: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export function InputSearch({ src, value, onChange, placeholder = '', label = '' }: InputSearchProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center gap-0.5 border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
        <div className="">
          <Image
            src={src}
            alt="Search Icon"
            width={16}
            height={16}
          />
        </div>
        <input
          className="w-full border-0 outline-none focus:outline-none focus:ring-0"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}