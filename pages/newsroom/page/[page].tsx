import uniqid from 'uniqid';
import Link from 'next/link'
import Image from 'next/image'
//import axios from "axios"

import type { Settings } from 'lib/sanity.queries'

import { Fade, Slide } from 'react-awesome-reveal'
import Container from 'components/BlogContainer'
import Layout from 'components/Layout'

import { Latestpost } from '../../../lib/wordpress.queries'
import { getImageLink } from '../../../lib/wordpress.image'
import { getPage, getPaginationStatic } from 'lib/wordpress.data'

export interface NewsRoomPageProps {
  preview?: boolean
  newsroomposts: Latestpost[]
  loading?: boolean
  settings: Settings
}

const NO_POSTS: Latestpost[] = []
const url = 'https://dev.fstdo.co.id/wordpress/wp-json/wp/v2/monthly-release/'

export default function page(props) {
  const { loading, newsroomposts, settings, preview, paginations } = props

  //console.log(newsroomposts);

  return (
    <>
      <Layout loading={loading} preview={preview}>
        <Fade duration={2000} cascade>
          <div
            className="h-96 w-full "
            style={{
              backgroundImage:
                "url('/images/Music Concert at GWK Cultural Park 2.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: "bottom"
            }}
          ></div>

          <div className="bg-stone-100 py-5">
            <Container>
              <h1 className="pb-1 text-center text-xl font-bold leading-tight tracking-tighter text-stone-900 md:text-left md:text-7xl md:leading-none lg:text-6xl">
                Newsroom
              </h1>
              <p className="text-base text-stone-500">Monthly Release. Products. Promos</p>
            </Container>
          </div>
        </Fade>

        <Container>
          <div className="mt-0 py-10">
            <>
              {newsroomposts.slice(0, 9).map((newsroompost) => {
                return (
                  <div
                    key={newsroompost.id}
                    className='gap-4" grid grid-cols-2 pb-10'
                  >
                    <Link href={`/monthly-release/${newsroompost.slug}`}>
                      <div className="mr-10 h-96 bg-stone-100">
                        <Image
                          alt={newsroompost.title.rendered}
                          src={getImageLink(
                            newsroompost._embedded['wp:featuredmedia'],
                            newsroompost.featured_media
                          )}
                          className="aspect-[3/2]"
                          width={720}
                          height={300}
                        />
                      </div>
                    </Link>
                    <div>
                      <div className="pb-5">
                        <div>
                          <Link href={`/monthly-release/${newsroompost.slug}`}>
                            <h3 className="pb-1 font-sans text-3xl font-light text-gray-900 hover:underline">
                              {newsroompost.title.rendered}
                            </h3>
                          </Link>
                        </div>
                        <div className="font-mono text-xs text-stone-500">
                          Date: {newsroompost.date}
                        </div>
                      </div>

                      <div
                        className="pb-5 leading-relaxed text-stone-600 text-base"
                        dangerouslySetInnerHTML={{
                          __html: newsroompost.excerpt.rendered,
                        }}
                      />

                      <div className="font-mono text-xs hover:underline ">
                        <Link href={`/monthly-release/${newsroompost.slug}`}>
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </>
          </div>
          <div className="mt-5 mb-5">
            <ul className="flex justify-center">
              {paginations.map((page) => {

                //console.log(uniqid);

                return (
                  <li key={uniqid('page-')}
                    className={`w-7 border-1 py-1 mx-1 rounded text-sm text-center text-stone-50 ${page.active ? 'bg-yellow-500' : 'text-stone-500 hover:text-stone-50 hover:bg-yellow-500'
                      }`}
                  >
                    <Link href={page.url}>
                      {page.page}
                    </Link>
                  </li>

                )
              })}


            </ul>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { posts, paginations } = await getPage(
    url,
    '/newsroom/page/',
    params.page
  )

  return {
    props: {
      newsroomposts: posts,
      paginations,
    },
  }
}

export async function getStaticPaths() {
  const paginations = await getPaginationStatic(url)
  return {
    paths: paginations,
    fallback: false,
  }
}
