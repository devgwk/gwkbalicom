import * as demo from 'lib/demo.data'
import type { Page, Settings } from 'lib/sanity.queries'
import Head from 'next/head'
import { notFound } from 'next/navigation'

import Layout from 'components/Layout'
import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import PageBody from 'components/PageBody'
import PageHeader from 'components/PageHeader'
import PagePageHead from 'components/PagePageHead'
import PageTitle from 'components/PageTitle'


export interface PagePageProps {
  preview?: boolean
  loading?: boolean
  page: Page
  morePages: Page[]
  settings: Settings
}

const NO_POSTS: Page[] = []

export default function PagePage(props: PagePageProps) {
  const { preview, loading, morePages = NO_POSTS, page, settings } = props
  const { title = demo.title } = settings || {}

  const slug = page?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <Head>
        <PagePageHead settings={settings} page={page} />
      </Head>

      <Layout preview={preview} loading={loading}>

        <BlogHeader title={title} level={2} />

        {preview && !page ? (
          <PageTitle>Loading…</PageTitle>
        ) : (
          <>
            <article>
              <PageHeader
                title={page.title}
                coverImage={page.coverImage}
                // date={page.date}
                // author={page.author}
              />

              <Container>                
                <PageBody content={page.content}/>
              </Container>
            </article>
          </>
        )}

      </Layout>


    </>
  )
}
