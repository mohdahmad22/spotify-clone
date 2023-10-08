"use client"
import React, { createRef, useState } from 'react'
import { DialogBox, Input, Spinner, supabase } from '..'


interface SignUPLoginProps{
  setIsLoggedIn:(t:boolean)=>void;
}

const SignUPLogin = ({setIsLoggedIn}:SignUPLoginProps) => {
  let [isOpen, setIsOpen] = useState(false)
  const [isLoading,setIsLoading]=useState(false);
  const [newUser,setUserType] = useState(false);
  const [error,setError]=useState('')
  const [user,setUser]=useState<{email:string,password:string}>({email:'',password:''})


  const SignUp=async(email:string,password:string)=>{
    const {data,error} = await supabase.auth.signUp({
      email:email,
      password:password
    })
    console.log(data)
}
const SignIN=async(email:string,password:string)=>{
    
    const {data,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })
    if(data.session && data.session.user && data.session?.user.email){
      localStorage.setItem("access_token",data.session.access_token);
      localStorage.setItem("email",data.session.user.email);
      setIsLoggedIn(true)
      setIsLoading(false)
    }
    else if(error){
      setError(error.message)
      setIsLoading(false)
    }
}

  const handleSubmit=()=>{
    setError('')
    setIsLoading(true)
    const email= user.email
    const password = user.password;

    SignIN(email,password)
  }
  if(isLoading){
    return (
      <Spinner />
    )
  }
  return (
    <div>
        <div className="text-white flex justify-end">
    <button onClick={()=>{
          setError('')
          setUserType(true)
          setIsOpen(true)
        }}  className="text-white rounded-full px-8 py-4 bg-black font-semibold mx-4">SignUp</button>
        <button onClick={()=>{
          setError('')
          setUserType(false)
          setIsOpen(true)
        }} className="text-black rounded-full px-8 py-4 bg-white font-semibold">Login</button>
    </div>
        <DialogBox isOpen={isOpen} setIsOpen={setIsOpen} title={newUser?"Signup Now":"Login To Spotify"}>
        <div className="flex flex-col justify-center gap-5 mt-14 w-80">
        <p className="text-red-600">{error && error}</p>
        <Input
            type='email'
            placeholder='Email or UserName'
            label='Email or UserName'
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            />
            <Input
            type='password'
            placeholder='Password'
            label='Password'
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            />
            <button onClick={handleSubmit} className="text-black font-semibold bg-green-500 rounded-full py-3">
              {newUser?'Sign Up':'Login'}
            </button>
        </div>
        </DialogBox>
    </div>
  )
}

export default SignUPLogin