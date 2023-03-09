import PagePage from 'components/PagePages'
import {
  getAllPagesSlugs,
  getPageAndMorePagesQuery,
  getSettings,
} from 'lib/sanity.client'
import { Page, Settings } from 'lib/sanity.queries'
import { PreviewSuspense } from '@sanity/preview-kit'
import { GetStaticProps } from 'next'
import { lazy } from 'react'

const PreviewPagePage = lazy(() => import('components/PreviewPagePage'))

interface PagePageProps {
  page: Page
  morePages: Page[]
  settings?: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}


export default function ProjectSlugRoute(props: PagePageProps) {
  const { settings, page, morePages, preview, token } = props

  if (preview) {
    return (

      <PreviewSuspense
        fallback={
          <PagePage
            loading
            preview
            page={page}
            morePages={morePages}
            settings={settings}

          />
        }
      >
        <PreviewPagePage
          token={token}
          page={page}
          morePages={morePages}
          settings={settings}

        />
      </PreviewSuspense>
    )
  }

  return <PagePage
    page={page}
    morePages={morePages}
    settings={settings}
  />
}

export const getStaticProps: GetStaticProps<
  PagePageProps,
  Query,
  PreviewData

> = async (ctx) => {
  const { preview = false, previewData = {}, params = {} } = ctx

  const token = previewData.token

  const [settings, { page, morePages }] = await Promise.all([
    getSettings(),
    getPageAndMorePagesQuery(params.slug, token),
  ])

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page,
      morePages,
      settings,
      preview,
      token: previewData.token ?? null
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllPagesSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/pages/${slug}`) || [],
    fallback: false,
  }
}
