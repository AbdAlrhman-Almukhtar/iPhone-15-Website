import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {rightImg, watchImg} from '../utils'
import VideoSlider from './VideoSlider'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const Highlights = () => {
useGSAP(() =>{
    gsap.to('#title', {
        scrollTrigger: {
            trigger: '#title', 
            toggleActions:'restart reverse restart reverse',
            start: 'top 85%',
        },
        duration: 3,
        opacity: 1,
        y:0
    })
    gsap.to('.link',{
        scrollTrigger: {
            trigger: '.link', 
            toggleActions:'restart reverse restart reverse',
            start: 'top 95%',
        },
        opacity: 1,
        y:0,
        duration:1.5,
        stagger:.25
    })
},[])
  return (
   <section id='highlights' className='w-screen overflow-hidden h-full common-padding bg-zinc'>
        <div className='screen-max--width'>
            <div className='mb-12 w-full md:flex items-end justify-between'>
                <h1 id='title' className='section-heading'>
                    Get the highlights.
                </h1>
                <div className='flex flex-wrap items-end gap-5'>
                    <p className='link'>
                        Watch the film
                        <img src={watchImg} alt="watch film" className='ml-2' />
                    </p>
                    <p className='link'>
                        Watch the event
                        <img src={rightImg} alt="watch event" className='ml-2'/>
                    </p>
                </div>
            </div>
            <VideoSlider/>
        </div>
   </section>
  )
}

export default Highlights