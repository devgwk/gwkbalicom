import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import {
  indexQuery,
  //indexPageQuery,
  type Post,
  // type Page,
  type Settings,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const posts: Post[] = usePreview(token, indexQuery) || []
  //const pages: Page[] = usePreview(token, indexPageQuery) || []
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview posts={posts} settings={settings} />
}
