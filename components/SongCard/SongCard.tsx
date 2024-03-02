"use client"
import { setMusidData } from "@/reduxa/musicslice"
import Image from "next/image"
import { BsFillPlayFill } from "react-icons/bs"
import {useDispatch} from "react-redux"


interface SongCardProps {
    title:string,artist:string,image_path:string,song_path:string,type:string
}

const SongCard = ({title,artist,image_path,song_path,type}:SongCardProps) => {
  const dispatch = useDispatch()
  const handleSongPlay =()=>{
    dispatch(setMusidData({title,artist,image_path,song_path}))
  }
  if(type === 'L'){
  return (
    <div className="flex group/card transition ease-linear opacity-90 delay-100 duration-300 flex-col gap-3 bg-black px-4 py-4 cursor-pointer rounded-md hover:bg-neutral-800 hover:opacity-100">
        <div className="relative">
        <Image
        alt="image"
        src={`https://silvnvkycirpivecnxiy.supabase.co/storage/v1/object/public/images/${image_path}`}
        
        width={150}
        height={100}
        />
        <button onClick={handleSongPlay} className="absolute  bottom-2 right-4  invisible group-hover/card:visible  transition ease-in-out delay-150 duration-600 rounded-full px-2 py-2 bg-green-500">
            <BsFillPlayFill color="black" size={30} />
        </button>
        </div>
        <p className="font-bold w-[150px]">{title}</p>
        <p className="text-gray-100">{artist}</p>
    </div>
  )
  }
  return (
    <div className="flex w-full mb-100  transition ease-linear opacity-90 delay-100 duration-300  gap-3 bg-black px-4 py-4 cursor-pointer rounded-md hover:bg-neutral-800 hover:opacity-100">
        <Image
        alt="image"
        src={`https://silvnvkycirpivecnxiy.supabase.co/storage/v1/object/public/images/${image_path}`}
        width={50}
        height={50}
        />
        <div className="flex flex-col">
        <p className="font-bold">{title}</p>
        <p className="text-gray-100">{artist}</p>
        </div>
        <button onClick={handleSongPlay} className="bottom-2 w-10 h-10  transition ease-in-out delay-150 duration-600 rounded-full px-2 py-2 bg-green-500">
            <BsFillPlayFill color="black" size={24} />
        </button>
    </div>
  )
}

export default SongCard