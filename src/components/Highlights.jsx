import React from 'react'
import { rightImg, watchImg } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Vidwocarsel from './Vidwocarsel'

const Highlights = () => {
    
    useGSAP(() => {
        gsap.to('#title', {
            opacity:1, y:0
        })
        gsap.to('.link',{opacity:1, y:0, duration:1, stagger: 0.25})
    }, [])

  return (
    <section id='highlights' className='w-screen overflow-hidden h-full bg-zinc common-padding'>
       <div className='screen-max-width'>
        <div className='mb items-end justify-between w-full'>
          <h1 id='title' className='section-heading'>Get the highlights</h1>
          <div className='flex flex-end flex-wrap items-end gap-5'> 
            <p className='link'>watch the film <img src={watchImg} alt='watch'className='ml-2'/></p>
            <p className='link'>watch the event <img src={rightImg} alt='watch'className='ml-2'/></p>
          </div>
        </div> 
        <Vidwocarsel />   
       </div>
    </section>
  )
}

export default Highlights