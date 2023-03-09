import Link from 'next/link'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
//import axios from "axios"

import type { Settings } from 'lib/sanity.queries'

import Container from 'components/BlogContainer'
import Layout from 'components/Layout'
import { Fade, Slide } from "react-awesome-reveal";

import { Promo } from '../../lib/wordpress.queries'
// import gwkbali3 from '../../src/assets/Traditional_Balinese_performance_at_Plaza_Wisnu_1.jpg'



export interface PromoPageProps {
    preview?: boolean
    promos: Promo[]
    loading?: boolean
    settings: Settings
}

const NO_POSTS: Promo[] = []



export default function PromoPage(props) {


    const { loading, promos, settings, preview } = props

    // const excerpt = {

    //     promos.map(promo => {

    //         return {

    //         }
    //     })
    // }
    // const [string, setString] = useState(
    //     {excerpt}
    //   );

    // useEffect(() => {
    //     const regex = /(<([^>]+)>)/gi;
    //     const newString = string.replace(regex, "");
    //     setString(newString);
    //   }, []);



    return (
        <>
            <Layout loading={loading} preview={preview}>
                <Fade duration={2000} cascade>
                    <div className='w-full h-96 ' style={{
                        backgroundImage: "url(/Traditional_Balinese_performance_at_Plaza_Wisnu_1.jpg)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        // backgroundPosition:"auto"

                    }}>
                    </div>

                    <div className='bg-stone-100 py-5 mb-10'>
                        <Container>
                            <h1 className="text-center text-stone-900 text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl pb-1">Promo</h1>
                            <p className='text-base'>Et ipsum voluptates sed eum tempore et a. Iusto aperiam beatae autem tempore magnam.</p>
                        </Container>
                    </div>
                </Fade>
                <Container>


                    {/* <div className='columns-2xs'>
                        <div className='w-5/6 '>sidebar</div>
                        <div className='w-full'>......</div>
                    </div> */}

                    <div className='grid grid-cols-3 gap-10 mb-20'>
                        <>
                            {

                                promos.slice(0, 12).map(promo => {

                                    return (
                                        <div key={promo.id} className='card pb-0 border rounded-sm'>

                                            <div className='bg-stone-100 mb-0'>
                                                <Image
                                                    alt={promo.title.rendered}
                                                    src="/Balinese cultural performance at Plaza Wisnu.jpg" className='aspect-[3/2]'
                                                    width={720}
                                                    height={300}
                                                />
                                            </div>
                                            <div><button className='bg-yellow-600 hover:bg-yellow-500 py-2 px-4 text-md font-medium text-white ease-in duration-300 w-full'>
                                                Get Promo {promo.date}
                                            </button></div>

                                            <div className='px-8 py-5'>
                                                <div className='pb-5'>

                                                    <div className=''>
                                                        <Link href="#"><h3 className="font-sans hover:underline text-3xl font-light text-gray-900 pb-1">{promo.title.rendered}</h3></Link></div>
                                                </div>

                                                <div className='pb-5'><p className='text-base text-stone-500'>
                                                    {promo.excerpt.rendered}
                                                </p></div>
                                                <div className='text-xs font-mono hover:underline'><Link href="/">Promo details</Link></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    </div>

                </Container>
            </Layout>
        </>
    )
}


export async function getStaticProps() {

    const promos = await fetch('https://dev.fstdo.co.id/wordpress/wp-json/wp/v2/promo/?sort_by=asc(date)').then(res => res.json())

    return {
        props: {
            promos
        }
    }

}