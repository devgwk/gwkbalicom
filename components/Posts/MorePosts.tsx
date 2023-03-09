import Link from "next/link"
import Image from "next/image"

import Container from "components/BlogContainer"

function MorePosts() {

    return (
        <div>

            <div className="bg-stone-100 py-5">
                <Container>
                    <h1 className="pb-1 text-center text-xl font-bold leading-tight tracking-tighter text-stone-900 md:text-left md:text-4xl md:leading-none lg:text-4xl">
                        More posts
                    </h1>
                    <p className="text-base">Monthly Release. Products. Promos</p>
                </Container>
            </div>

            <div className='grid grid-cols-3 gap-10 mb-20'>
                <div className='card pb-0 border rounded-sm'>

                    <div className='bg-stone-100 mb-0'>
                        <Image
                            alt="alternative text here"
                            src="/images/IMG_8445-2.jpg" className='aspect-[3/2]'
                            width={720}
                            height={300}
                        />
                    </div>

                    <div className='px-8 py-5'>
                        <div className='pb-5'>
                            <div className=''>
                                <Link href="#">
                                    <h3 className="font-sans hover:underline text-3xl font-light text-gray-900 pb-1">
                                        Judulnya di sini
                                    </h3>
                                    <div className="font-mono text-xs text-stone-500">
                                        Date: 02 November 2022
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='pb-5'><p className='text-base text-stone-500'>
                            Drinking vinegar waistcoat four dollar toast raclette vinyl. Fanny pack quinoa tbh fit cornhole, post-ironic schlitz. Keytar four loko plaid organic, yr cred narwhal tacos polaroid cold-pressed forage stumptown trust fund.
                        </p></div>
                        <div className='text-xs font-mono hover:underline'><Link href="/">Read more</Link></div>
                    </div>

                </div>
                <div className='card pb-0 border rounded-sm'>

                    <div className='bg-stone-100 mb-0'>
                        <Image
                            alt="alternative text here"
                            src="/images/IMG_8445-2.jpg" className='aspect-[3/2]'
                            width={720}
                            height={300}
                        />
                    </div>

                    <div className='px-8 py-5'>
                        <div className='pb-5'>
                            <div className=''>
                                <Link href="#">
                                    <h3 className="font-sans hover:underline text-3xl font-light text-gray-900 pb-1">
                                        Judulnya di sini
                                    </h3>
                                    <div className="font-mono text-xs text-stone-500">
                                        Date: 02 November 2022
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='pb-5'><p className='text-base text-stone-500'>
                            Drinking vinegar waistcoat four dollar toast raclette vinyl. Fanny pack quinoa tbh fit cornhole, post-ironic schlitz. Keytar four loko plaid organic, yr cred narwhal tacos polaroid cold-pressed forage stumptown trust fund.
                        </p></div>
                        <div className='text-xs font-mono hover:underline'><Link href="/">Read more</Link></div>
                    </div>

                </div>
                <div className='card pb-0 border rounded-sm'>

                    <div className='bg-stone-100 mb-0'>
                        <Image
                            alt="alternative text here"
                            src="/images/IMG_8445-2.jpg" className='aspect-[3/2]'
                            width={720}
                            height={300}
                        />
                    </div>

                    <div className='px-8 py-5'>
                        <div className='pb-5'>
                            <div className=''>
                                <Link href="#">
                                    <h3 className="font-sans hover:underline text-3xl font-light text-gray-900 pb-1">
                                        Judulnya di sini
                                    </h3>
                                    <div className="font-mono text-xs text-stone-500">
                                        Date: 02 November 2022
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='pb-5'><p className='text-base text-stone-500'>
                            Drinking vinegar waistcoat four dollar toast raclette vinyl. Fanny pack quinoa tbh fit cornhole, post-ironic schlitz. Keytar four loko plaid organic, yr cred narwhal tacos polaroid cold-pressed forage stumptown trust fund.
                        </p></div>
                        <div className='text-xs font-mono hover:underline'><Link href="/">Read more</Link></div>
                    </div>

                </div>


            </div>

            <div className="py-10">
                <Link
                    href="/pages/newsroom"
                    className="bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600  py-2 px-4 rounded-md font-light text-base text-yellow-600 ease-in duration-150 border"
                >
                    Artikel lainnya
                </Link>
            </div>




        </div>
    )
}

export default MorePosts