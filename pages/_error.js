import Container from 'components/BlogContainer'
import Layout from 'components/Layout'

function Error({ statusCode }) {
  return (
    <Layout>
      <Container>
        <div className="h-screen">
          <div className="grid self-center">
            <p className="text-base">
              {statusCode
                ? `An error ${statusCode} occurred on server`
                : 'An error occurred on client'}
            </p>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
