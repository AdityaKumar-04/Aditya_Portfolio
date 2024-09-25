'use client'
import React from 'react'

export default function Not_found() {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-3xl text-white font-bold text-center pt-20">Page Not Found 404</h1>
        <img src="https://cdn.vectorstock.com/i/1000v/81/59/404-error-page-not-found-tiny-people-vector-51588159.avif" alt="" className='w-1/2 rounded-lg overflow-hidden' />
      </div>
    </div>
  )
}
