import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}

export const Layout = (props:Props) => {
  return (
    <main className='w-full h-full overflow-x-hidden relative '>
            {props.children}
    </main>
  )
}
