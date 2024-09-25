"use client"
import React, { FormEvent, useState } from 'react'
import { Boxes } from './ui/background-boxes'
import { cn } from "@/lib/utils";
export default function Background_boxes() {
  // const [name, setname] = useState("")
  // const [email, setemail] = useState("")
  // const [message, setmessage] = useState("")
  // const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log('Submitted:', {name, email, message });
  // };
  async function handleSubmit(e:any) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "f8b926d2-b74a-46ba-8e0f-3527bc698dcd",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      e.target.reset();
    }
  }
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <div className="z-10 w-[25rem] text-center">
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
          <h2 className='text-5xl font-semibold font-serif text-white'>Contact</h2>
          <div className="w-full">
            <input
              type="text"
              name="name"
              id=""
              className=' rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white'
              placeholder='Name'
              required
              
            />
          </div>
          <div className="">
            <input
              type="email"
              name="email"
              id=""
              className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white'
              placeholder='Email'
              required
               />
          </div>
          <div className="">

            <textarea
              name="message"
              id=""
              rows={6}
              className='rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700 text-white'
              placeholder='Message'
              required
             
            >

            </textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
