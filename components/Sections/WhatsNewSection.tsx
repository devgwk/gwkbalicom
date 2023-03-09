import Link from 'next/link'
import Image from "next/image"
import Container from 'components/BlogContainer'
import { Fade, Slide } from "react-awesome-reveal";

function WhatsNewSection() {
  return (
    <Container>
      <Fade duration={2000} fraction={0} damping={0.5}>
        <div className="w-full">

          <div className='grid grid-cols-3 gap-0 mb-2 pt-5'>

            <div className='col-span-2'><h2 className="font-sans text-3xl sm:text-6xl font-thin text-stone-500 mb-0 text-left leading-none">
              What&rsquo;s New in
            </h2>
              <p className='text-left text-4xl sm:text-8xl font-extralight text-stone-700'>GWK</p></div>
            {/* <div className='w-full'><Link href="/pages/newsroom">
            <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded-md font-light text-base text-yellow-600 ease-in duration-150 border'>
              See What Will Happen Next Month
            </button></Link></div> */}

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
            <div className="col-span-2 bg-slate-100">
              <Image src="/images/Music Concert at GWK Cultural Park 1.jpg" alt="gwkbali" className='aspect-auto' width={1000} height={800} />
            </div>
            <div className="bg-slate-0 h-48 sm:h-full align-top" style={{
              backgroundImage: "url('/images/plaza garuda.jpg')",
              backgroundSize: "cover"
            }} >
              ...
            </div>

          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0">
          <div className="w-full bg-slate-100 p-5">
            <h2 className="text-xl sm:text-4xl font-light pb-3">Art & Cultural Heritage</h2>
            <p className='text-xs sm:text-base font-light pb-5'>Affogato glossier messenger bag, before they sold out meditation deep v stumptown af PBR&B pour-over intelligentsia. Tbh umami banh mi, intelligentsia migas forage iPhone butcher narwhal echo park.</p>
            <div className='text-xs font-mono hover:underline '><Link href="/">Read more</Link></div>
          </div>
          <div className="w-full bg-slate-100">
            <Image src="/images/Balinese cultural performance at Plaza Wisnu.jpg" alt="gwkbali" className='aspect-video' width={1000} height={800}/>
          </div>
          <div className="w-full bg-slate-100 p-5">
            <h2 className="text-xl sm:text-4xl font-light pb-3">Legends Come True</h2>
            <p className='text-xs sm:text-base font-light pb-5'>Affogato glossier messenger bag, before they sold out meditation deep v stumptown af PBR&B pour-over intelligentsia. Tbh umami banh mi, intelligentsia migas forage iPhone butcher narwhal echo park.</p>
            <div className='text-xs font-mono hover:underline '><Link href="/">Read more</Link></div>
          </div>

        </div>
      </Fade>
    </Container>
  )
}

export default WhatsNewSection
