"use client"
import React, { createRef, useEffect, useState } from "react";
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { FiVolume1 } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Songs } from "@/constants";
import Image from "next/image";
import { RootState } from "@/reduxa/store";

interface MusicData{
  title: string;
  song_path:string;
  image_path:string;
  artist:string;
}

const AudioPlayer = () => {
  const audioRef = createRef<HTMLAudioElement>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [index, setIndex] = useState(0);
  const musicdata = useSelector((state:RootState)=>state.music.music)


  const handlePlayPause = () => {
    if (isPlaying && audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    } else if(audioRef.current){
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  const handleSongVolume = (value: string) => {
    const vol = parseInt(value);
    if(audioRef.current) audioRef.current.volume = vol / 10;
  };

  const changeSong = async (direction: string) => {
    if (index > Songs.length - 1 || index < 0) return;

    const inx = index;
    var music: any = document.getElementById("mymusic");
    music.pause();
    setIsPlaying(false);
    
    if (direction === "next") {
      music.src = Songs[inx + 1].path;
      setIndex(inx + 1);
    }
    
    if (direction === "back") {
      music.src = Songs[inx - 1].path;
      setIndex(inx - 1);
    }
    
    music?.play();
    setIsPlaying(true);
  };

  return (
    <div className="fixed flex flex-row gap-5 items-center bg-black h-20 bottom-10 md:bottom-0 xl:bottom-0 min-w-full">
      <audio
        id="mymusic"
        autoPlay
        onPlay={()=>setIsPlaying(true)}
        onTimeUpdate={(e) =>{
          const target = e.target as HTMLAudioElement
          setElapsedTime(Math.round((target.currentTime * 100) / target.duration))
        }
        }
        onEnded={() => setIsPlaying(false)}
        ref={audioRef}
        src={`https://silvnvkycirpivecnxiy.supabase.co/storage/v1/object/public/songs/${musicdata?.song_path}`}
      />
      <Image
        alt="titleImg"
        className="md:ml-5 hidden md:block"
        src={`https://silvnvkycirpivecnxiy.supabase.co/storage/v1/object/public/images/${musicdata?.image_path}`}
        height={50}
        width={50}
      />
      <div className="flex flex-col">
        <p className="text-white hidden md:block xl:block w-full">{musicdata?.title}</p>
        <p className="text-gray-500 text-sm hidden md:block xl:block w-full">{musicdata?.artist}</p>
      </div>
      <div className="flex flex-col items-center gap-2 mx-4 flex-grow  md:max-w-md">
        <div className="flex gap-5">
          <BiSkipPrevious onClick={() => changeSong("back")} size={40} color="white" />
          {isPlaying ? (
            <BsFillPauseCircleFill onClick={handlePlayPause} size={40} color="white" />
          ) : (
            <BsFillPlayCircleFill onClick={handlePlayPause} size={40} color="white" />
          )}
          <BiSkipNext onClick={() => changeSong("next")} size={40} color="white" />
        </div>
        
        <div className="bg-neutral-700 rounded-full h-1 w-full">
          <div
            className="bg-gray-100 h-1 rounded-full"
            style={{ width: `${elapsedTime}%` }}
          ></div>
        </div>
      </div>
      
      <div className="hidden md:flex xl:flex flex-row items-center mx-10">
        <FiVolume1 size={30} color="white" />
        <input
          onChange={(e) => handleSongVolume(e.target.value)}
          className="text-white h-1 bg-neutral-700"
          type="range"
          min="1"
          max="10"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;