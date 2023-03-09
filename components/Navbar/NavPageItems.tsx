
import { Page, indexPageQuery } from 'lib/sanity.queries'
import Link from 'next/link'
import styles from './NavPageItems.module.css'


function NavPageItems() {

  return (

    <div>

      {/* <div className="p-10">

        <div className="dropdown inline-block relative">
          <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1">Dropdown</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
            <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
            <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
          </ul>
        </div>

      </div> */}


      <ul className='space-x-7'>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/the-story" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150 font-sans">The Story</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/the-cultural-heritage" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">Cultural Heritage</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/the-park" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">The Park</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/function" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">Function</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/the-events" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">The Events</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/faq" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">FAQ</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/newsroom" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">Newsroom</Link>
        </li>
        <li className='list-none inline odd:bg-white even:bg-slate-50'>
          <Link href="/pages/promo" className="hover:text-yellow-500 font-extralight text-2xl ease-in duration-150">Promo</Link>
        </li>
      </ul>
    </div>
  )

}


export default NavPageItems

//     <div>
//       <ul className='space-x-5 py-0 pt-7'>
//         <li className='list-none inline odd:bg-white even:bg-slate-50'>
//           <Link href="/pages/the-story" className="hover:text-yellow-500 text-sm ease-in duration-300">The Story</Link>
//         </li>
//         <li className='list-none inline odd:bg-white even:bg-slate-50'>
//           <Link href="/" className="hover:text-yellow-500 text-sm ease-in duration-300">Cultural Heritage</Link>
//         </li>
//         <li className='list-none inline odd:bg-white even:bg-slate-50'>
//           <Link href="/" className="hover:text-yellow-500 text-sm ease-in duration-300">The Park</Link>
//         </li>
//         <li className='list-none inline odd:bg-white even:bg-slate-50'>
//           <Link href="/" className="hover:text-yellow-500 text-sm ease-in duration-300">Function</Link>
//         </li>
//         <li className='list-none inline odd:bg-white even:bg-slate-50'>
//           <Link href="/" className="hover:text-yellow-500 text-sm ease-in duration-300">FAQ</Link>
//         </li>
//       </ul>
//     </div>

