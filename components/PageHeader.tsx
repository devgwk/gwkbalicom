
import type { Page } from 'lib/sanity.queries'
import { Fade, Slide } from "react-awesome-reveal";

import CoverImage from 'components/CoverImage'
import Container from 'components/BlogContainer'
import PageTitle from 'components/PageTitle'

export default function PageHeader(
  props: Pick<Page, 'title' | 'coverImage'>
) {
  const { title, coverImage } = props
  return (
    <>
      <Fade cascade>
        <div className='w-full'>
          <CoverImage title={title} image={coverImage} priority />
        </div>

        <Container>
          <PageTitle><Slide direction="up" duration={2000}>{title}</Slide></PageTitle>
        </Container>

      </Fade>
    </>
  )
}
