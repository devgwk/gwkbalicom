import { groq } from 'next-sanity'

const postFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`
const pageFields = groq`
  _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`

const ctaFields = groq`  
  name,
  type,
  title,
`


export const settingsQuery = groq`*[_type == "settings"][0]`


 export const indexQuery = groq`
 *[_type == "post"] | order(date desc, _updatedAt desc) {
   ${postFields}
 }`

export const indexPageQuery = groq`
 *[_type == "page"] | order(date desc, _updatedAt desc) {
   ${pageFields}
 }`

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}

  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`

export const pageAndMorePagesQuery = groq`
{
  "page": *[_type == "page" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${pageFields}

  },
  "morePages": *[_type == "page" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${pageFields}
  }
}`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const pageSlugsQuery = groq`
*[_type == "page" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`
export const pageBySlugQuery = groq`
*[_type == "page" && slug.current == $slug][0] {
  ${pageFields}
}
`

export const categoryQuery = groq`
*[_type == "category"]{
  title,
  "parentSlug": parent->slug.current,
  "slug": slug.current
}
// *[_type == "category"]{
//   title,
//   "parentSlug": parent->slug.current,
//   "slug": slug.current
// }
`


export interface Author {
  name?: string
  picture?: any
}

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}

export interface Page {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any  
}

export interface Hero {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  author?: Author
  slug?: string
  content?: any
}


export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
