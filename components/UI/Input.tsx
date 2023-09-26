import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface InputProps {
    label:string,
    type:string,
    placeholder:string,
    onChange:React.ChangeEventHandler<HTMLInputElement>,
    value?:string,
    accept?:string
}

const Input = ({label,type,placeholder,onChange,value,accept}:InputProps) => {
  return (
    <label className="flex flex-col">
              <span className="text-white mb-2">{label}</span>
              <input 
              onChange={onChange}
              className="outline-none text-white  focus:ring-white bg-neutral-900 opacity-90 px-5 py-2 rounded-md ring-1 ring-gray-500" 
              type={type}
              value={value}
              accept={accept}
              placeholder={placeholder}
              />
        </label>
  )
}

export default Input