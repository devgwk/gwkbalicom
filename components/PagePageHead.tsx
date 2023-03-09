import BlogMeta from 'components/BlogMeta'

import * as demo from 'lib/demo.data'
import { urlForImage } from 'lib/sanity.image'
import { Page, Settings } from 'lib/sanity.queries'

export interface PostPageHeadProps {
  settings: Settings
  page: Page
}

export default function PostPageHead({ settings, page }: PostPageHeadProps) {
  const title = settings.title ?? demo.title
  //const title = settings.title
  return (
    <>
      <title>{page.title ? `${page.title} | ${title}` : title}</title>
      <BlogMeta />
      {page.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(page.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}