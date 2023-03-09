import Link from 'next/link'
import Image from "next/image"

import Spacer from 'components/Spacer'
import Container from 'components/BlogContainer'

import gwkBali1 from '../../src/assets/gwk-bali.jpg'
import gwkBali2 from '../../src/assets/statue-g580b90da9_1920.jpg'

function HeroSection2() {
  return (
    <Container>

      <div className="mx-auto w-full">

        <div className="mx-auto w-full">
          <div className="m-0 pt-10 pb-20">
            <h2 className="font-sans text-6xl font-thin text-gray-900 mb-3 text-center">
              What&rsquo;s New
            </h2>
            <p className='text-center text-2xl font-extralight text-stone-500'>What&rsquo;s in GWK this month</p>
          </div>
        </div>


        <div className="grid grid-cols-2 gap-0">
          <div className="w-full bg-slate-100">
            <Image src="./gwk-bali.jpg" alt="gwkbali" className='aspect-video' width={500} height={200}/>
          </div>
          <div className="w-full bg-slate-0 pt-10 pb-10 pl-10 align-top">
            <div>
              <h2 className="font-sans text-3xl font-light text-gray-900 pb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit</h2>
            </div>
            <div className='pb-3'>
              <p className='text-base font-light'>Affogato glossier messenger bag, before they sold out meditation deep v stumptown af PBR&B pour-over intelligentsia. Tbh umami banh mi, intelligentsia migas forage iPhone butcher narwhal echo park. Coloring book hashtag man bun pug, cronut hexagon typewriter 90&rsquo;s small batch vinyl subway tile iceland helvetica health goth. Bushwick quinoa knausgaard flannel poutine kale chips. La croix umami swag gastropub intelligentsia meditation chicharrones keytar celiac man bun messenger bag bodega boys mustache. Twee DSA pinterest biodiesel cardigan. Fit artisan vibecession flexitarian tacos hexagon ugh banh mi.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0">
        <div className="w-full bg-slate-0 pt-10 pr-10 pb-10 pl-0 align-top">
          <div>
            <h2 className="font-sans text-3xl font-light text-gray-900 pb-4">Lorem ipsum dolor sit amet consectetur adipiscing elit</h2>
          </div>
          <div className='pb-3'>
            <p className='text-base font-light'>Affogato glossier messenger bag, before they sold out meditation deep v stumptown af PBR&B pour-over intelligentsia. Tbh umami banh mi, intelligentsia migas forage iPhone butcher narwhal echo park. Coloring book hashtag man bun pug, cronut hexagon typewriter 90&rsquo;s small batch vinyl subway tile iceland helvetica health goth. Bushwick quinoa knausgaard flannel poutine kale chips. La croix umami swag gastropub intelligentsia meditation chicharrones keytar celiac man bun messenger bag bodega boys mustache. Twee DSA pinterest biodiesel cardigan. Fit artisan vibecession flexitarian tacos hexagon ugh banh mi.</p>
          </div>
        </div>
        <div className="w-full bg-slate-100">
          <Image src="./gwk-bali.jpg" alt="gwkbali" className='aspect-video' width={500} height={200}/>
          {/* <h2 className="text-4xl font-bold text-neutral-50">Poster</h2> */}
        </div>
      </div>


      <div className='py-20 text-center'>
        <Link href="/pages/newsroom">
          <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded-md font-light text-base text-yellow-600 ease-in duration-150 border'>
            See What Will Happen Next Month
          </button></Link>
      </div>

    </Container>
  )
}

export default HeroSection2
