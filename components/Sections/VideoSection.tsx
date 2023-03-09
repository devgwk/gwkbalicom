
import Container from 'components/BlogContainer'
import React, { useState } from 'react'

import Image from 'next/image';
import Link from 'next/link'


import { Fade } from "react-awesome-reveal";




function HomeSection1() {

  const [isOpen, setOpen] = useState(false)


  return (

    <Container>

      {/* <ModalVideo channel='youtube' isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}


      <div className='container'>
        <Fade duration={3000} fraction={0}>
        <div className="mx-auto w-full">
          <div className="sm:m-0 pt-5 sm:pt-10 sm:pb-20">
            <h2 className="font-sans text-3xl sm:text-6xl font-thin text-gray-900 mb-3 text-center">
              Discover Bali&rsquo;s Most Iconic Landmark
            </h2>
            <p className='text-center text-md sm:text-2xl font-extralight text-stone-500 pb-5'>Take An Unforgettable Journey Through The Unique Themed Area Of GWK Cultural Park</p>
          </div>
        </div>
        </Fade>

        <div className="relative">
          <div className="bg-hero-section bg-no-repeat bg-center bg-cover">
            <Image
              alt="alt text"
              src="/images/Kecak Garuda Wisnu at Amphitheater stage.jpg" className='aspect-video'
              width={1440} height={500}
            />
            
            <div className="absolute inset-0 bg-blend-darken bg-opacity-70 bg-black ">
              <div className="sm:text-5xl font-thin sm:my-56 my-11 mx-0 sm:mx-16 text-center text-white">
                <h1 className="font-sans text-3xl  sm:text-8xl font-ultralight text-neutral-50 mb-0 mr-5 ml-5 sm:mb-0 sm:mr-36 sm:ml-36 leading-tight">
                  The Tale of Garuda
                </h1>
                <div className="">
                  <p className="text-2xl font-extralight">Beginning of an Epic Adventure</p>
                </div>

                <div className='text-center justify-center w-full items-center'>
                  {/* <PlayCircleIcon className='h-14 w-14'/> */}
                  <Link href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.5} stroke="currentColor" className="w-14 h-14 inline stroke-yellow-500 hover:stroke-yellow-300 ease-in duration-150">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </Container>
  )
}



export default HomeSection1