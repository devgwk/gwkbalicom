
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";

import Hamburger from 'hamburger-react';

import Container from '../components/BlogContainer'

import 'tailwindcss/tailwind.css'
//import '../src/Sidebar.css';

import { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  const [isOpen, setOpen] = useState(false)


  if (isOpen) {
    return (


      <div>

        <Fade>
          <div className='min-h-screen bg-stone-900'>

            <div className='relative w-full'>

              <div className='absolute top-2 right-2 sm:top-7 sm:right-4 text-white z-50'>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </div>

              {/* ======== */}
              {/* <Slide> */}
              <div>
                <div className='absolute top-0 w-full'>
                  <ul className='w-full block'>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/the-story" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">The Story</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/the-cultural-heritage" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">Cultural Heritage</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/the-park" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">The Park</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/function" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">Function</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/the-events" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">The Events</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/faq" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">FAQ</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/newsroom" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">Newsroom</Link>
                    </li>
                    <li className='pl-5 py-5 bg-black w-full border-b-2 border-neutral-800'>
                      <Link href="/pages/promo" className="text-yellow-50  font-extralight text-2xl ease-in duration-150 font-sans">Promo</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* </Slide> */}
              {/* ======== */}


            </div>
          </div>
        </Fade>

      </div >
    )
  }

  return (
    <>

      <div className='relative w-full z-50'>
        <div className='absolute top-2 right-2 sm:top-7 sm:right-4 text-white'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      <Component {...pageProps} />
    </>
  )
}
