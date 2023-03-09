import SectionSeparator from 'components/SectionSeparator'

export default function PageTitle({ children }) {
  return (

    <div className="pt-12">
      <h1 className="mb-12 text-center text-xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-6xl">
        {children}
      </h1>
      <SectionSeparator />
    </div>
  )
}
