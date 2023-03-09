

import BlogMeta from 'components/BlogMeta'
import MetaDescription from 'components/MetaDescription'
import IndexPageHead from 'components/IndexPageHead'
import * as demo from 'lib/demo.data'

import Layout from 'components/Layout'
import type { Post, Settings } from 'lib/sanity.queries'

import Head from 'next/head'
import Navbar from 'components/Navbar/Navbar'
import Footer from 'components/Footer/Footer'

import HeroHomepage from 'components/Sections/HeroHomepage'
import CulturalSection from 'components/Sections/CulturalSection'
import WhatsNewSection from 'components/Sections/WhatsNewSection'
import HomeSection1 from 'components/Sections/VideoSection'
import HomeIntro from './Sections/HomeIntro'
import Spacer from 'components/Spacer'


export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings

}

export default function IndexPage(props: IndexPageProps) {

  const {
    preview,
    loading,
    posts,
    settings,


  } = props

  const { title = demo.title } = settings || {}

  return (
    <>

      <Head>
        <IndexPageHead settings={settings} />
      </Head>

      <Navbar />

      <HeroHomepage />      

      <HomeSection1 />

      <WhatsNewSection />

      <CulturalSection />

      <HomeIntro />

      <Spacer />

      <Footer />


    </>
  )


}

