type InputEmailProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
};

export function InputEmail({ value, onChange, placeholder = '', label = '', error = '' }: InputEmailProps) {
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
        <input
          className="w-full border-0 outline-none focus:outline-none focus:ring-0"
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}