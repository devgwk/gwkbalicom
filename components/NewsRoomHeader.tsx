
import Container from 'components/BlogContainer'
import PageTitle from 'components/PageTitle'

import { Latestpost } from '../lib/wordpress.queries'


export default function NewsRoomHeader(
  props: Pick<Latestpost, 'id' | 'title' | 'excerpt' | 'date' | 'slug'>
) {
  const { id, title, excerpt, date, slug } = props

  return (
    <>

      <div className='w-full'>
        {/* <CoverImage title={title} image={coverImage} priority /> */}
      </div>


      <Container>
        <PageTitle>{title}</PageTitle>
      </Container>


    </>
  )
}
