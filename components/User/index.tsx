"use client"

import { useEffect, useState } from "react";
import { Spinner } from "..";
import {TfiUser} from "react-icons/tfi"
const User = () => {
  let [user, setUser] = useState('');
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    const user = localStorage.getItem("email")
    if(user) setUser(user);
  })

  if(isLoading){
    return (
      <div className="flex justify-center items-center w-full">
      <Spinner />
      </div>
    )
  }
  return (
    <div>
        <div className="text-white flex justify-end items-center">
    <p className="text-white rounded-full px-8 py-4 bg-black font-semibold mx-4">{user}</p>
    
    <TfiUser size={25} color="white"  />
    </div>
    </div>
  )
}

export default User