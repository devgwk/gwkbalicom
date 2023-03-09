import { Fade, Slide } from "react-awesome-reveal";

function HeroHomepage() {
  return (
    <Fade duration={2000}>
      <div className="sm:relative">
        <div className="bg-hero-section bg-no-repeat bg-center bg-cover">
          <video autoPlay loop muted className=" inset-0 object-cover aspect-video w-full min-h-screen max-h-screen sm:max-h-screen sm:min-h-screen">
            <source
              src="/video/gwkteaser.mp4"
              type="video/mp4"
              className=""
            />
          </video>
          <div className="absolute inset-0 bg-blend-darken bg-opacity-70 bg-black min-h-screen max-h-screen">
            <Slide direction="up" duration={2000}>
              <div className="sm:text-5xl font-thin my-24 mx-0 sm:my-56 text-center text-white">
                <h1 className="hidden sm:block font-sans text-4xl sm:text-8xl font-ultralight text-neutral-50 mt-0 mr-2 mb-4 ml-2 sm:mr-36 sm:ml-36 leading-tight">
                  Welcome to The Largest Statue in South East Asia
                </h1>

                <div className="pt-10">
                  <span className="block sm:hidden font-sans text-4xl font-ultralight text-neutral-50 mt-0 mr-5 mb-4 ml-5 leading-relaxed">
                    Welcome to <br></br>The <span className="font-semibold">Largest Statue</span> in South East Asia
                  </span>
                  <button
                    className="rounded-none bg-yellow-600 px-6 py-2 text-xl font-light leading-7 text-stone-50 shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 tracking-wide focus-visible:outline-offset-2 focus-visible:outline-yellow-500 ease-in duration-300"
                  >
                    Explore!
                  </button></div>
              </div>
            </Slide>
          </div>

        </div>

      </div>
    </Fade>
  )
}

export default HeroHomepage
