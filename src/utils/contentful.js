import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })
}
const client = createContentClient()

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  })

  return response.items
}

export const getHomepage = async () => {
  const result = await client.getEntry('3WUfFy7HSj6mtoLDSN3S0z')
  return result
}

export const getInscriptions = async () => {
  const response = await client.getEntries({
    content_type: 'penemuan',
  })
  return response.items
}

export const getArticle = async (id) => {
  const response = await client.getEntry(id);
  return response;
}
export const getArticles = async (params = {}) => {
  const response = await client.getEntries({
    content_type: 'artikel',
    ...params,
  })
  return response.items
}

export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    'fields.slug[match]': slug,
  }
  const queryResult = await client.getEntries(queryOptions)
  return queryResult.items[0]
}