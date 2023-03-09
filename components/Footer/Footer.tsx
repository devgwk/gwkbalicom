import React from 'react'
import Link from "next/link"
import Image from 'next/image'


import Container from 'components/BlogContainer'




import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faTicketSimple, faCompass, faWalking, faMessage } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false



function Footer() {
  return (
    <div className="mx-auto w-full">


      {/* <FontAwesomeIcon icon={faFaceRelieved} />
      <FontAwesomeIcon icon={fa-brands fa-square-instagram} /> */}

      {/* <div className="mx-auto w-full h-52 p-0 align-middle" style={{

        backgroundImage: "url('bgwavestone900.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top"

      }}></div> */}

      {/* mobile */}
      <div className='relative w-full block sm:hidden'>
        <div className='fixed bottom-0 bg-slate-50'>
          <div className="grid grid-flow-col gap-0">
            <div>
              <button className='bg-yellow-600 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600 py-4 px-4 font-light text-xs text-stone-50 ease-in duration-150 leading-tight min-h-full'>
                <FontAwesomeIcon icon={faTicketSimple} /><br></br>Buy Ticket
              </button></div>
            <div><button className='bg-yellow-600 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600 py-4 px-4 font-light text-xs text-stone-50 ease-in duration-150 leading-tight min-h-full'>
              <FontAwesomeIcon icon={faCompass} /><br></br>Experience The Culture
            </button></div>
            <div><button className='bg-yellow-600 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600 py-4 px-4 font-light text-xs text-stone-50 ease-in duration-150 leading-tight min-h-full'>
              <FontAwesomeIcon icon={faWalking} /><br></br>Stroll The Park
            </button></div>
            <div><button className='bg-yellow-600 hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600 py-4 px-4 font-light text-xs text-stone-50 ease-in duration-150 leading-tight min-h-full'>
              <FontAwesomeIcon icon={faMessage} /><br></br>Ask a Question
            </button></div>
          </div>
        </div>


      </div>

      <div className="mx-auto mt-14 bg-stone-900 p-0 sm:p-14">
        <Container>      
          {/* mid & lg */}
          <div className="columns-4 hidden sm:block">
            <div className="w-full">
              <Image src="/images/logo-stayintouch.svg" alt="GWK Bali" width={100} height={100} className="align-middle" />
            </div>
            <div className="w-full">
              <ul>
                <li>
                  <Link href="/pages/newsroom" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Newsroom & Media</Link>
                </li>
                <li>
                  <Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Event Calendar</Link>
                </li>
                <li>
                  <Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <ul>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">
                  <span className='pr-2'><FontAwesomeIcon icon={faInstagramSquare} /></span><span>Instagram</span>
                </Link></li>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300"><span className='pr-2'><FontAwesomeIcon icon={faFacebookSquare} /></span>Facebook</Link></li>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300"><span className='pr-2'><FontAwesomeIcon icon={faYoutubeSquare} /></span>Youtube</Link></li>
              </ul>
            </div>
            <div className="w-full">
              <ul>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Corporate</Link></li>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Careers</Link></li>
                <li><Link href="/" className="text-stone-400 text-sm font-light hover:text-yellow-600 ease-in duration-300">Contact Us</Link></li>
              </ul>
            </div>

          </div>


        </Container>

      </div>

      <div className="relative hidden sm:block">
        <div className="absolute right-0 bottom-0">
          <Image src="/images/garudawisnu.png" width={300} height={200} alt="Garuda Wisnu Kencana" />
        </div>
      </div>

    </div>
  )
}

export default Footer