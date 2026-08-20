import { useState } from 'react';

type InputPasswordProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
}

const sizeErrorClasses = {
  error: 'border-red-500',
}

export function InputPassword({ value, onChange, placeholder = '', label = '', error = '' }: InputPasswordProps) {
  const [hasEntered, setHasEntered] = useState(false);
  return (
    <div className="flex flex-col">
      <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className={`border ${hasEntered && !value.trim() ? `${sizeErrorClasses.error} focus-within:ring-red-200` : 'border-gray-300 focus-within:border-blue-500 focus-within:ring-blue-200'} rounded-md px-3 py-2 focus-within:ring`}>
        <input
          className="w-full border-0 outline-none focus:outline-none focus:ring-0"
          type="password"
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            setHasEntered(true);
            onChange(newValue);
          }}
          placeholder={placeholder}
        />
      </div>
      {hasEntered && !value.trim() && (
        <p className="mt-1 text-sm text-red-500">パスワードを入力してください</p>
      )}
    </div>
  )
}