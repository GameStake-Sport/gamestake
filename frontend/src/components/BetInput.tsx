'use client'

import { FC, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BetInputProps {
  label?: string
  placeholder?: string
  styles?: string
}

const BetInput: FC<BetInputProps> = ({ label, placeholder, styles }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState('')

  const handleChange = (value: string) => {
    setData(value)
  }

  const handleOnBlur = () => {
    if (data === '' || !data)
      setIsFocused(false)
  }

  return (
    <div className={`relative w-full max-w-xs rounded-lg shadow ${styles}`}>
      {
        label &&
        <Label
          htmlFor='email'
          className={`absolute left-3 z-10 transition-all text-xl ${
            isFocused ? '-top-3 text-md text-red' : 'top-1.5 text-white'
          } text-white`}
        >
          { label }
        </Label>
      }
      <Input
        type='email'
        id='email'
        placeholder={placeholder}
        className='bg-gray-500/50 backdrop-blur-md text-white px-3 py-2 w-full border-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0'
        onFocus={() => setIsFocused(true)}
        onBlur={handleOnBlur}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default BetInput