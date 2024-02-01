/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Card = ({imgData} : {imgData : {img: string, title: string}}) => {
  return (
    <div className='rounded-xl overflow-hidden w-full h-full relative border-[1px] border-white/30'>
        <img src={imgData.img} alt='card' className='object-contain h-full'/>
        <span className='absolute bottom-2 left transform -translate-x-1/2 left-1/2 text-sm text-white font-bold'>{imgData.title}</span>
    </div>
  )
}

export default Card