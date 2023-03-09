import BlogMeta from 'components/BlogMeta'
import MetaDescription from 'components/MetaDescription'
import * as demo from 'lib/demo.data'
import { Settings } from 'lib/sanity.queries'
import { Latestpost } from 'lib/wordpress.queries'



export interface IndexPageHeadProps {
  settings: Settings
}


export default function IndexPageHead({ settings }: IndexPageHeadProps) {
  const {
    title = demo.title,
    description = demo.description,
    ogImage = {},
  } = settings
  const ogImageTitle = ogImage?.title || demo.ogImageTitle

  return (
    <>
      <title>{title}</title>
      <BlogMeta />
      <MetaDescription value={description} />
      <meta
        property="og:image"
        content={`${
          process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''
        }/api/og?${new URLSearchParams({ title: ogImageTitle })}`}
      />
    </>
  )
}
