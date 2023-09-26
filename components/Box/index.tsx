import React from 'react'


interface BoxProps{
    children:React.ReactNode,
    className?:string
}

const Box = ({children,className}:BoxProps) => {
  return (
    <div className={`flex flex-col mt-2 mx-2  bg-neutral-900 opacity-90 px-4 py-4 rounded-md ${className}`}>
        {children}
    </div>
  )
}

export default Box