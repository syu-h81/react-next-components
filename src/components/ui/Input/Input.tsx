'use client';
import { useState } from 'react';
import { InputEmail } from './InputEmail';
import { InputSearch } from './InputSearch';
import { InputPassword } from './InputPassword';

export function Input() {

  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <InputEmail
        label="メールアドレス"
        value={email}
        placeholder="example@example.com"
        onChange={setEmail}
      />
      <InputSearch
        label="検索"
        value={search}
        placeholder="キーワードを入力"
        onChange={setSearch}
        src="/images/input-search-icon.png"
      />
      <InputPassword
        label="パスワード"
        value={password}
        placeholder="パスワードを入力"
        onChange={setPassword}
      />
    </div>
  )
}