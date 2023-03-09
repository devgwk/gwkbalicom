import { PortableText } from '@portabletext/react'
import styles from './PostBody.module.css'
import newsroomposts from '../pages/pages/newsroom'

export default function NewsRoomBody({ newsroomposts }) {

  return (
    
      <div className={`mx-0 pb-10 font-light ${styles.portableText} `}>      
        <PortableText value={newsroomposts} />
      </div>
    
  )
}
