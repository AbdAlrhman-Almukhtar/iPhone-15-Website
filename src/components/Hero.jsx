import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo,smallHeroVideo } from '../utils'
import ScrollTrigger from 'gsap/ScrollTrigger';

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
 
    const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ?smallHeroVideo:heroVideo)
    const handelVideo = () =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }
    useEffect(() => {
        window.addEventListener('resize',handelVideo);
        return(() =>{
            window.removeEventListener('resize',handelVideo);
        })
    },[])
  useGSAP( () => {
    gsap.to('#heroTitle',{
        scrollTrigger: {
            trigger: '#heroTitle', 
            toggleActions:'restart reverse restart reverse',
            start: 'top 85%',
        },
        opacity:1,
        delay:1
    })
    gsap.to('#cta',{
        scrollTrigger: {
            trigger: '#cta', 
            toggleActions:'restart reverse restart reverse',
            start: 'top 99%',
        },
        opacity:1,
        delay:1,
        y:-50
    })
    gsap.to('#heroVideo', {
        scrollTrigger: {
          trigger: '#heroVideo',
          toggleActions: 'play pause reverse restart',
          start: 'top 99%',
        },
        onComplete: () => {
          videoRef.current.play();
        }
      })
  },[])
    return (
    <section className='w-full nav-height bg-black relative'>
        <div className='h-5/6 w-full flex-center flex-col'>
            <p id="heroTitle" className='hero-title'>iPhone 15 pro</p>
            <div className='md:w-10/12 w-9/12'>
                <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc} id='heroVideo'>
                    <source src={videoSrc} type='video/mp4'/>
                </video>
            </div>
        </div>
        <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20'>
                <a href="#highlights" className='btn'>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
        </div>
    </section>
  )
}

export default Hero