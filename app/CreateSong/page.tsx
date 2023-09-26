"use client"
import { Box, DialogBox, Input, SongCard, Spinner, supabase } from '@/components'
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

const CreateSong = () => {
  const [song,setSong]=useState({artist:'',title:'',song:null,image:null})
  const [isOpen,setIsOpen]=useState(false);
  const [songData,setSongData] = useState<Array<SongDataob>>([]);
  const [IsLoading, setIsLoading] = useState(false);

  const handleSubmit=async()=>{
    setIsLoading(true)
    if(song.image && song.song){
      const { data:SongData,error:SongError} = await supabase.storage.from("songs").upload(`songs-${song.title}`,song.song,{
        cacheControl:'3600',
        upsert:false
      })
      const { data:ImageData,error:ImageError} = await supabase.storage.from("images").upload(`images-${song.title}`,song.image,{
        cacheControl:'3600',
        upsert:false
      })
      const { error}  = await supabase.from("songs").insert({
        title:song.title,
        artist:song.artist,
        image_path:ImageData?.path,
        song_path:SongData?.path   
      })
      setIsOpen(false);
      setIsLoading(false);
      if(error){
        setIsLoading(false)
      }
    }
    setSong({artist:'',title:'',song:null,image:null})
    toast.success("Song Created") 
  }
  const deleteSong=async()=>{
    const {error} = await supabase.from("songs").delete().eq('id',2);
  }
  const getSong=async()=>{
    setIsLoading(true)
    const {data,error} = await supabase.from("songs").select();
    if(data){
      setSongData(data)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getSong();
  }, [])
  
  if(IsLoading){
    return (
      <div className="flex flex-1 flex-row items-center justify-center">
      <Spinner />
      </div>
    )
  }
  return (
    <div className="text-white flex-1">
        <Box className='min-h-screen'>
        <button onClick={()=>setIsOpen(true)} className="bg-neutral-600 rounded-full w-[200px] py-2  mt-4 text-white font-semibold">Upload a New Song</button>
            
            <h1 className=' mt-14 font-bold text-[32px]'>Your Song List</h1>
            <div className="flex flex-row gap-5 flex-wrap mb-20">
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
            <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} title="Create Song" >
            <div className="flex flex-col justify-center gap-5 mt-14 w-80">
        <Input
            type='text'
            placeholder='Title'
            label='Title or Name'
            value={song.title}
            onChange={(e)=>setSong({...song,title:e.target.value})}
            />
            <Input
            type='text'
            placeholder='Artist'
            label='Artist'
            value={song.artist}
            onChange={(e)=>setSong({...song,artist:e.target.value})}
            />
            <Input
            onChange={(e)=>setSong({...song,song:e.target.files[0]})}
             accept='.mp3' placeholder='song file' label='song file' type='file' />
            <Input 
            onChange={(e)=>setSong({...song,image:e.target.files[0]})}
             accept='image/*' placeholder='Image file' label='Image file' type='file' />
            <button onClick={handleSubmit} className="text-black font-semibold bg-green-500 rounded-full py-3">
              upload
            </button>
        </div>
            </DialogBox>   
        </Box>
    </div>
  )
}

export default CreateSong