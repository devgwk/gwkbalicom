import PagePage, { PagePageProps } from 'components/PagePages'
import { usePreview } from 'lib/sanity.preview'
import { type Page, pageAndMorePagesQuery } from 'lib/sanity.queries'

export default function PreviewPostPage({
  token,
  page,
  settings,
}: {
  token: null | string
} & PagePageProps) {
  const { page: pagePreview, morePages }: { page: Page; morePages: Page[] } =
    usePreview(token, pageAndMorePagesQuery, {
      slug: page.slug,
    }) || { page: null, morePages: [] }

  return (
    <PagePage
      preview
      page={pagePreview}
      morePages={morePages}
      settings={settings}
    />
  )
}
