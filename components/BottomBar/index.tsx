import Link from 'next/link'
import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'
import { MdHomeFilled } from 'react-icons/md'

const BottomBar = () => {
  return (
    <div className='fixed flex mx-5 py-2 h-10 bottom-0 gap-20 items-center xl:hidden md:hidden  bg-black min-w-full'>
                    <Link key={1} href="/">
                      <MdHomeFilled size={32} color="white" />
                    </Link>
                    <Link key={1} href="/CreateSong">
                    <BiAddToQueue size={32} color="white" />
                    </Link>
    </div>
  )
}

export default BottomBar