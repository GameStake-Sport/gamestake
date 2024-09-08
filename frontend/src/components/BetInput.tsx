'use client'

import { FC, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BetInputProps {
  name: string
  label?: string
  placeholder?: string
  styles?: string
  disable?: boolean
  type?: string
}

const BetInput: FC<BetInputProps> = ({ name, label, placeholder, styles, disable, type = 'number' }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [data, setData] = useState('')

  const handleChange = (value: string) => {
    setData(value)
  }

  const handleOnBlur = () => {
    if (data === '' || !data)
      setIsFocused(false)
  }

  useEffect(() => {
    if (disable) {
      setData('')
      setIsFocused(false)
    }
  }, [disable])

  return (
    <div className={`relative max-w-40 rounded-lg shadow ${styles}`}>
      {
        label &&
        <Label
          htmlFor={name}
          className={`absolute left-3 z-10 transition-all text-xl duration-300 ${
            isFocused ? '-top-3 text-lg' : 'top-5 text-white pt-1 pl-1'
          } text-white`}
        >
          { label }
        </Label>
      }
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className='w-full text-center h-20 bg-gray-500/50 backdrop-blur-md text-white px-3 py-2 border-none focus:outline-none focus:ring-0 focus:border-none focus-visible:ring-0 text-2xl'
        onFocus={() => setIsFocused(true)}
        onBlur={handleOnBlur}
        onChange={(e) => handleChange(e.target.value)}
        disabled={disable}
        value={data}
      />
    </div>
  )
}

export default BetInput