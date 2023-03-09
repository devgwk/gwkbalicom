import BlogMeta from 'components/BlogMeta'
import { urlForImage } from 'lib/sanity.image'

import { Latestpost } from '../lib/wordpress.queries'

export interface NewsRoomHeadProps {  
  newsroomposts: Latestpost
}

export default function NewsroomHead({ newsroomposts }: NewsRoomHeadProps) {
  // const title = settings.title ?? demo.title
  return (
    <>      
      {/* <BlogMeta />
      {newsroomposts.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(newsroomposts.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )} */}
    </>
  )
}