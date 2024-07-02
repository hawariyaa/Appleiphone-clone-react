import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect } from 'react'


const Hero = () => {

  const[Videosrc,setVideosrc] = useState(window.innerWidth < 760 ? smallHeroVideo: heroVideo)
  const handleVideo = () => {
    if(window.innerWidth < 760){
      setVideosrc(smallHeroVideo)
    }
    else{
      setVideosrc(heroVideo)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleVideo)
    return () => {
      window.removeEventListener('resize', handleVideo)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero',{
      opacity:1,
      duration:3,
      delay:2.5
    })
  }, [])
  useGSAP(() => {
    gsap.to('#cta', {
      opacity:1,
      y:0,
      duration:2,
      delay:2.5
    })
  })
  return (
    <section className='w-full nav-height relative bg-black'>
        <div className='h-1/6 w-full flex-center flex-col m-0'>
            <p id='hero' className='hero-title'>iphone 15 pro</p>
        </div>
        <div className='md:w-10/12 justify-center'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} loop  key={Videosrc} >
            <source src={Videosrc} type='video/mp4'/>
          </video>
        </div>
        <div className='flex flex-col items-center opacity-0 translate-y-20' id='cta'>
          <a href='#highlight' className='btn'>Buy</a>
          <p className='font-normal text-xl'>From 99$/month or 999$</p>
        </div>
    </section>
  )
}

export default Hero