import { de } from 'date-fns/locale'
import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  indexQuery,
  indexPageQuery,
  type Post,
  type Page,
  type Settings,
  postAndMoreStoriesQuery,
  pageAndMorePagesQuery,
  postBySlugQuery,
  postSlugsQuery,
  pageBySlugQuery,
  pageSlugsQuery,
  settingsQuery,
} from 'lib/sanity.queries'

import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export default client

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllPages(): Promise<Page[]> {
  if (client) {
    return (await client.fetch(indexPageQuery)) || []
  }
  return []
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(postSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllPagesSlugs(): Promise<Pick<Page, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(pageSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
    console.log('slug')
  }
  return []
}

export async function getPostBySlug(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPageBySlug(slug: string): Promise<Page> {
  if (client) {
    return (await client.fetch(pageBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPostAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ post: Post; morePosts: Post[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(postAndMoreStoriesQuery, { slug })
  }
  return { post: null, morePosts: [] }
}
export async function getPageAndMorePagesQuery(
  slug: string,
  token?: string | null
): Promise<{ page: Page; morePages: Page[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(pageAndMorePagesQuery, { slug })
  }
  return { page: null, morePages: [] }
}
