import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { SelectInputProps } from '@/types/selectInput'

export type Role = {
  Seller: string,
  Customer: string,
}

export default function SelectInput({
  id,
  titleLabel,
  options,
  registerType,
  errorMessage,
}: SelectInputProps) {
  const { register, formState: {errors} } = useFormContext()
  return (
    <div className='w-4/5 md:w-7/12'>
      <label htmlFor={id} className="text-gray-400">
        {titleLabel}
      </label>
      <select
        id={id}
        className="w-full bg-transparent rounded-md border-gray-300 border-[1px] px-2 py-2"
        {...register(id, registerType)}
      >
        {options.map((option, index) => (
          <option key={index} value={option} className="">
            {option}
          </option>
        ))}
      </select>
      <p className="text-red-500 text-sm">{errorMessage}</p>
    </div>
  )
}