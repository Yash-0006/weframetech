
//profit component used in hero section 

import React from 'react'
import Image from 'next/image'
import images from '../assets/images'

const Profit = ({text}) => {
  return (
    <div className='flex rounded-2xl justify-center items-center border-2 w-18 h-6 px-1 border-green-600'>
        <Image src={images.rise} alt='rise' className='w-2.5 h-2.5 mr-1' />
        <p className='text-green-600 ml-1' >{text}</p>
    </div>
  )
}

export default Profit