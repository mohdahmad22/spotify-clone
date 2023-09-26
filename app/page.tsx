"use client"
import { AudioPlayer, Box, SignUPLogin, SongCard, Spinner, User, supabase } from '@/components'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'


interface SongDataob{
  artist:string
created_at:string
id:number
image_path:string
song_path:string
title:string
}

const Home = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [loading,setIsLoading]=useState(false)
  
  const [songData,setSongData] = useState<Array<SongDataob>>([]);

  const getSong=async()=>{
    setIsLoading(true)
    const {data,error} = await supabase.from("songs").select();
    if(data){
      setSongData(data)
      setIsLoading(false)
    toast.success("Song Loaded");
    }
  }
  useEffect(()=>{
    setIsLoading(true)
    getSong();
    const user = localStorage.getItem("email")
    if(user){
      setIsLoggedIn(true)
      setIsLoading(false)
    }
    setIsLoading(false)
  },[])

  if(loading){
    return (
      <div className="flex justify-center items-center w-full">
      <Spinner />
      </div>
    )
  }
  return (
    <div className='text-white flex-1'>
        <Box className='min-h-screen'>
          {isLoggedIn?<User/>:<SignUPLogin setIsLoggedIn={setIsLoggedIn} />}
          <h1 className="mt-10 font-bold text-[32px]">Play unlimited songs</h1>
          <div className="flex flex-row flex-wrap mb-20 gap-5">
              {
                songData && songData.map((song)=>(
                  <SongCard
                  key={song.id} 
                  title={song.title} 
                  artist={song.artist} 
                  image_path={song.image_path} 
                  song_path={song.song_path}
                   />
                ))
              }
            </div>
        </Box>
    </div>
  )
}

export default Home