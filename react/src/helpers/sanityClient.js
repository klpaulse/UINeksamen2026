import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'YOUR_PROJECT_ID',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-22',
    token: 'YOUR_API_TOKEN'
})

export default sanityClient