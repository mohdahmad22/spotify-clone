import { NavLinks } from '@/constants'
import React from 'react'
import Link from "next/link"
import { Box } from '..'

const SideBar = () => {
    return (
        <aside className="flex-3 flex-col min-h-screen hidden md:block xl:block">
            <div className="sticky top-0">
            <Box className="w-80">
            {
                NavLinks.map((nav) => (
                    <Link key={nav.name} href={nav.url}>
                    <div  className='flex flex-row items-center'>
                        {nav.icon}
                        <p className='text-white text-[18px]  font-semibold py-3 px-5'>
                            {nav.name}
                        </p>
                    </div>
                    </Link>
                ))
            }
        </Box>
        <Box className='text-white items-start px-4'>
            <h1 className="fo>nt-semibold text-[16px]">Create Your first Playlist</h1>
            <p className="py-2 text-sm">Its easy we'll help You</p>
            <button className="bg-white rounded-full px-4 py-1 mt-4 text-black font-semibold">Create playlist</button>
        </Box>
        <Box className='text-white items-start px-4'>
            <h1 className="font-semibold">Create New Song using below button</h1>
            <p className="py-2 text-sm">You can update and listen unlimited</p>
            <Link href="/CreateSong" className="bg-white rounded-full px-4 py-1 mt-4 text-black font-semibold">Create Song</Link>       
        </Box>
        <Box className='text-white items-start px-4'>
            <h1 className="font-semibold">Lets find some podcast to follow</h1>
            <p className="py-2 text-sm">We will keep you updated on new episodes</p>
            <button className="bg-white rounded-full px-4 py-1 mt-4 text-black font-semibold">Browse Podcasts</button>
        </Box>
            </div>
        </aside>
    )
}

export default SideBar