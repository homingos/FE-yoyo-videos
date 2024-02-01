/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Card = ({imgData} : {imgData : {img: string, title: string}}) => {
  return (
    <div className='relative rounded-2xl overflow-hidden w-full h-full border-[1px] border-white/30'>
        <img src={imgData.img} alt='card' className='object-contain h-full'/>
        <span className='absolute z-30 bottom-2 left transform -translate-x-1/2 left-1/2 text-sm text-white font-bold'>{imgData.title}</span>
        <div className="absolute z-20 bg-gradient-to-b from-transparent via-black/80 to-black/60 h-24 w-full bottom-0 left-0"></div>
    </div>
  )
}

export default Card