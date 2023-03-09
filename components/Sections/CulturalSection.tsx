import Link from 'next/link'
import Image from "next/image"
import Container from 'components/BlogContainer'
import { Fade, Slide } from "react-awesome-reveal";


function CulturalSection() {
  return (
    <Container>
      <Fade duration={2000} fraction={0} damping={0.5}>
        <div className="mx-auto w-full">
          <div className="mb-2 pt-5 ">
            <h2 className="font-sans text-3xl sm:text-6xl font-thin text-stone-500 mb-0 text-left leading-none">
              Celebrating
            </h2>
            <p className='text-left text-3xl sm:text-8xl font-extralight text-stone-700'>The Richness of Balinese Culture</p>
          </div>

          <div className="">
            <div className="w-full bg-slate-100 relative">
              <Image src="/images/kecak_sang_hyang_jaran.jpg" alt="gwkbali" className='aspect-auto' width={1440} height={200}/>
            </div>
            <div className='p-5 bg-stone-900'>
              <div className='text-xl sm:text-4xl font-extralight text-stone-300 text-center sm:text-left inline-block align-middle'>
                <span>The Spectacular Kecak</span><span className='font-medium sm:font-medium ml-3 text-white'>Garuda Wisnu</span></div><span className='ml-0 sm:ml-2 text-center'>
                <Link href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="currentColor" className="w-12 h-12 inline stroke-yellow-500 hover:stroke-yellow-300 ease-in duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                  </svg>
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div className="w-full bg-slate-100">
            <Image
              alt="alt text"
              src="/images/Garuda Wisnu Kencana statue 1.jpg" className='aspect-video'
              width={500}
              height={200}
            />
            <div className='px-5 py-4 bg-stone-900'>
              <h3 className='text-md sm:text-3xl font-light sm:font-extralight text-stone-300'>Bali from Above</h3>
            </div>
          </div>
          <div className="w-full bg-slate-100">
            <Image
              alt="alt text"
              src="/images/jendela bali resto (15).jpg" className='aspect-video'
              width={500}
              height={200}
            />
            <div className='px-5 py-4 bg-stone-900'>
              <h3 className='text-md sm:text-3xl font-light sm:font-extralight text-stone-300'>Jendela Restaurant Bali</h3>
            </div>
          </div>
          <div className="w-full bg-slate-100">
            <Image
              alt="alt text"
              src="/images/IMG_8445-2.jpg" className='aspect-video'
              width={500}
              height={200}
            />
            <div className='px-5 py-4 bg-stone-900'>
              <h3 className='text-md sm:text-3xl font-light sm:font-extralight text-stone-300'>Balinese Culture</h3>
            </div>
          </div>
        </div>
      </Fade>
    </Container>
  )
}

export default CulturalSection
