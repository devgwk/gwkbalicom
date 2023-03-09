import React from 'react'
import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'


import Link from 'next/link'
import Image from 'next/image'

import { urlForImage } from 'lib/sanity.image'

// import imageUrlBuilder from '@sanity/image-url'
import getYouTubeId from 'get-youtube-id'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


export default function PageBody({ content }) {

  //Video
  const youTubeComponent = ({ value, isInline }) => {
    const { youtubelabel, url } = value
    if (!value.url) {
      <>Missing YouTube URL!</>
    }
    const id = getYouTubeId(value.url)
    return (
      <div>
        <LiteYouTubeEmbed id={id} title={value.title} />
      </div>
    )
  }

  //CTA
  const CallToActionComponent = ({ value, isInline }) => {
    return (
      <Link href={value.url}><button className='bg-white hover:bg-yellow-500 hover:text-white hover:border-yellow-500 border-yellow-600 py-2 px-4 rounded font-light text-base text-stone-800 ease-in duration-150 border mx-1'>
        {value.linkText}</button></Link>
    )
  }

  //FIGURE/PHOTO/IMAGES

  interface figureComponentProps {
    image: any
    priority?: boolean
    title: string
  }

  const figureComponent = ({ value, isInline }) => {



    //const { altText, image: source, priority } = props
    //console.log(value)
    //console.log(value.asset._ref)
    // console.log(value.altText)


    // const image = value?.asset?._ref ? (
    //   <div>
    //     <img src={value.asset._ref}></img>
    //   </div>
    // ) : (
    //   <div>.......</div>
    // )

    return (
      <div>
        <Image
          //src={urlForImage(value.asset._ref).url()}
          width={1280}
          height={1280}
          src={urlForImage(value.asset._ref).height(1280).width(1280).url()}
          alt={value.altText}
        />
      </div>

    )


  }

  // const figureComponent = ({ value, isInline, props: figureComponentProps }) => {
  //   const { width, height } = getImageDimensions(value)

  //   const { image: source, priority } = props
  //   const image = source?.asset?._ref ?    
  // }


  const components = {
    types: {
      callToAction: CallToActionComponent,
      youtube: youTubeComponent,
      Image: figureComponent,
    },
  }


  return (
    <div className={`mx-0 pb-10 font-light ${styles.portableText} `}>
      {/* <PortableText value={content} /> */}
      <PortableText value={content} components={components} />
    </div>
  )
}
