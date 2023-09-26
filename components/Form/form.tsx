"use client"
import React, { useEffect } from 'react'
import { supabase } from '..'



const Form = () => {
    
    const updatePosts=async()=>{
        const {data,error} = await supabase.from('Posts').insert([
            {
                name:"Ahmad",
                address:"Nautanwa"
            }
        ])
        console.log(data)
    } 
    const getPosts=async()=>{
        const {data,error} = await supabase.from('Posts').select()
        console.log(data)
    }

    const SignUp=async()=>{
        const {data,error} = await supabase.auth.signUp({
            email:"Khanahmad545@gmail.com",
            password:"whythis@23"
        })
        console.log(data)
    }
    const SignIN=async()=>{
        const {data,error} = await supabase.auth.signInWithPassword({
            email:"Khanahmad545@gmail.com",
            password:"whythis@23"
        })
        console.log(data,error)
    }
    useEffect(()=>{
        getPosts()
    },[])

  return (
    <div className='flex'>
        <label>
            <input type='text' />
        </label>
    </div>
  )

}

export default Form