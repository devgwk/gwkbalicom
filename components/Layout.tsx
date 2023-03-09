import AlertBanner from 'components/AlertBanner'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Layout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
