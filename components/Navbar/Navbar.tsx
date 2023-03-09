
import type { Page, Settings } from 'lib/sanity.queries'
import Link from 'next/link'
import Image from "next/image"
import Hamburger from 'hamburger-react';
import { useState } from 'react';
// import { fade as Menu } from 'react-burger-menu';
import { Fade, Slide } from "react-awesome-reveal";

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import NavPageItems from './NavPageItems'

import { GlobeAltIcon } from '@heroicons/react/20/solid'

const LogoGWK = '/images/logogwk.svg'

export interface NavbarProps {
  settings: Settings
}



export default function Navbar() {

  const [isOpen, setOpen] = useState(false)

  return (
    <>
      

      <div className='hidden sm:block sticky top-0 z-50 sm:z-10  bg-white'>

        {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}  /> */}


        <div className='container mx-auto p-0'>
          <div className='flex'>

            <div className="flex-none w-40 sm:w-40 md:40">
              <Link href="/">
                <Image src={LogoGWK} alt="Garuda Wisnu Kencana" width={100} height={100} />
              </Link>
            </div>

            <div className='flex-auto hidden sm:block sm:w-full'>
              <div className='text-left pt-8 '>
                <NavPageItems />
              </div>
            </div>

            <div className='flex-auto w-48 text-right pt-4'>
              <div className='flex justify-between pb-1'><span className='text-xs font-light mr-3 w-full text-right'>Lang option</span><span className='pt-1'><GlobeAltIcon className='h-3 w-3' /></span></div>
              <div>
                <Link href="https://ticket.gwkbali.com" rel="noopener noreferrer" target="_blank">
                  <Tippy content="Get your ticket here!" className='font-thin text-xs' interactive={true} interactiveBorder={20} delay={100}>
                    <button className='bg-yellow-600 hover:bg-yellow-500 py-2 px-4 rounded-md font-light text-base text-white ease-in duration-150'>
                      Buy Ticket
                    </button>
                  </Tippy>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>)
}
