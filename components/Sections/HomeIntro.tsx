import Container from 'components/BlogContainer'
import { Fade, Slide } from "react-awesome-reveal";

function HomeIntro() {
    return (

        <Container>
            <Fade duration={3000} fraction={0} damping={0.5}>¸
                <div className="mx-auto w-5/6 pt-10 sm:pt-20 sm:pb-20">
                    <div className="m-0">
                        <h2 className="font-sans text-2xl sm:text-5xl font-thin text-gray-900 text-center">
                            The Story of
                        </h2>
                        <h3 className="font-sans text-3xl sm:text-6xl font-light sm:font-thin text-gray-900 mb-5 sm:mb-10 text-center">
                            Garuda Wisnu Kencana
                        </h3>
                    </div>
                    <div className="mx-auto w-full gap-0 pb-20 sm:px-0">
                        <div className="w-full">
                            <p className='text-base font-light text-center text-stone-500 leading-relaxed'>
                                Garuda Wisnu Kencana statue depicts Wisnu riding Garuda. In Hindu mythology Lord Wisnu is seen as the protector of the Universe, while his trusted companion, the mighty eagle-like Garuda represents loyalty and selfless devotion. Kencana means gold, and both are adorned in crowns of gold mosaic. The Garuda is also the national emblem of Indonesia and represents freedom.</p>
                            <p className='text-base font-light text-center text-stone-500 '>
                                Designed by renowned Balinese artist Nyoman Nuarta, the statue is made of copper and brass and features 754 modules with 25 steel segments weighing in at a hefty 900 tons, with a steel weight of 1300 tons. The statue and pedestal is 120.9 meters high with a width of 64 meters thanks to Garuda’s wingspan. Its distinct green color comes from oxidization as the copper reacts with the elements.
                            </p>

                            <div className='p-10 text-center hidden sm:block'>
                                <span className='inline-block mb-5 sm:mx-2'>
                                    <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded font-light text-base text-stone-500 ease-in duration-150 border'>
                                        Buy Ticket
                                    </button>
                                </span>
                                <span className='inline-block mb-5 sm:mx-2'>
                                    <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded font-light text-base text-stone-500 ease-in duration-150 border'>
                                        Experience The Culture
                                    </button>
                                </span>
                                <span className='inline-block mb-5 sm:mx-2'>
                                    <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded font-light text-base text-stone-500 ease-in duration-150 border'>
                                        Stroll The Park
                                    </button>
                                </span>
                                <span className='inline-block mb-5 sm:mx-2'>
                                    <button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded font-light text-base text-stone-500 ease-in duration-150 border'>
                                        Ask a Question
                                    </button>
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </Fade>
        </Container>
    )
}

export default HomeIntro