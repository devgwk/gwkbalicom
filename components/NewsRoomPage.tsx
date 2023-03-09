import type { Page, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'
import Link from 'next/link'

import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/Layout'


import PageTitle from 'components/PageTitle'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

import NewsRoomBody from 'components/NewsRoomBody'
import NewsRoomHeader from 'components/NewsRoomHeader'
import NewsroomHead from 'components/NewsRoomHead'

import { Latestpost } from '../lib/wordpress.queries'



export interface NewsroomPageprops {
  preview?: boolean
  loading?: boolean
  newsroomposts: Latestpost
  settings: Settings
}


export default function NewsroomPage(props: NewsroomPageprops) {
  const { loading, newsroomposts, settings } = props
  //const { title = demo.title } = settings || {}

  const slug = newsroomposts?.slug

  // if (!slug && !preview) {
  //   notFound()
  // }

  return (
    <>
      <Head>
        <NewsroomHead newsroomposts={newsroomposts} />
      </Head>


      <Layout preview={null} loading={loading}>

        <Navbar />

        <BlogHeader title={null} level={2} />

        {!newsroomposts ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <article>
              {/* <NewsRoomHeader
                title={newsroomposts.title}
                date={newsroomposts.date}
                excerpt={newsroomposts.excerpt}

              /> */}

              <Container>

                
                {/* <NewsRoomBody content={newsroomposts.content} /> */}

              </Container>
            </article>

            <Container>
              <section>
                <div className='grid grid-cols-2 gap-6 bg-slate-300 p-6 mb-20 col-span-3 rounded h-auto'>
                  <div className='w-full align-middle text-center'><h3 className='text-2xl font-medium'>Have Questions?</h3></div>
                  {/* <div className='w-full inline-block'><Image src={LogoGWK} alt="Garuda Wisnu Kencana" height={150}/></div> */}
                  <div className='w-full align-middle text-center'><Link href="/"><h3 className='text-2xl font-medium'>Connect With Us</h3></Link></div>
                </div>
              </section>
            </Container>

          </>
        )}

      </Layout>

      <Footer />
    </>
  )
}
