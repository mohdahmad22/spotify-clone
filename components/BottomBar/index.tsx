import Link from 'next/link'
import React from 'react'
import { MdHomeFilled } from 'react-icons/md'

const BottomBar = () => {
  return (
    <div className='fixed flex mx-5 py-2 h-10 bottom-0 gap-5 items-center xl:hidden md:hidden  bg-black min-w-full'>
                    <Link key={1} href="/">
                        <p className='text-white'>Home</p>
                    </Link>
                    <Link key={1} href="/CreateSong">
                        <p className='text-white'>create song</p>
                    </Link>
    </div>
  )
}

export default BottomBar