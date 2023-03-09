
import { Fade, Slide } from 'react-awesome-reveal'
import Image from 'next/image'
import { getImageLink } from '../../lib/wordpress.image'
import Link from 'next/link'

import Layout from 'components/Layout'
import MorePosts from 'components/Posts/MorePosts'
import Container from 'components/BlogContainer'

export default function postWordpress(props) {
  const { loading, post, settings, preview } = props
  //console.log('post contetn', post)
  //const featImgUrl = post.featured_media

  const featImgUrl = getImageLink(
    post._embedded['wp:featuredmedia'],
    post.featured_media
  )



  return (
    <Layout preview={preview} loading={loading}>

      <div className='block w-full md:relative h-96  md:min-h-screen bg-stone-600' style={{
        backgroundImage: "url(" + featImgUrl + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}>

        <div className='block md:absolute w-full h-full  md:min-h-screen md:bottom-0 lg:bottom:0 bg-gradient-to-t from-stone-900'>
          <Container>
            <div className='absolute h-auto top-1/3 md:grid md:grid-cols-3 md:gap-10 md:mb-0 md:py-10'>
              <div className='col-span-3 md:col-span-2'>
                <Fade duration={3000}><h1
                  className="pb-1 text-left text-3xl md:text-8xl font-bold leading-tight tracking-normal text-stone-50 md:text-left md:leading-none "
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  <div className="font-mono text-xs text-stone-300 text-left md:text-left">
                    Date: {post.date}
                  </div>
                </Fade>
              </div>
              <div>
                {/* ... */}
              </div>
            </div>
          </Container>
        </div>
      </div>


      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-0 py-10'>
          <div className='md:col-span-2'>
            <div className="mt-0">
              <div
                className='text-stone-600 leading-loose'
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
          </div>
          <div className=''>
            ...
          </div>
        </div>

        <div className="mt-5 mb-5">
          <MorePosts />
        </div>
      </Container>
    </Layout >
  )
}

export async function getStaticProps(data) {
  const post = await fetch(
    `https://dev.fstdo.co.id/wordpress/wp-json/wp/v2/monthly-release?slug=${data?.params.slug || ''
    }&_embed`
  ).then((res) => res.json())

  return {
    props: {
      post: post[0],
    },
  }
}
export async function getStaticPaths() {
  const slugs = await fetch(
    'https://dev.fstdo.co.id/wordpress/wp-json/wp/v2/monthly-release?_fields=slug'
  ).then((res) => res.json())

  const paths = slugs?.map(({ slug }) => `/monthly-release/${slug}`) || []
  //console.log(paths)

  return {
    paths,
    fallback: false,
  }
}
