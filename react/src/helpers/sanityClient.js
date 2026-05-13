import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: '18dbr3jz',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2026-04-22',
    token: 'skbHDj4dByjSWB5MG1MiH7Ox6xyRQuKXuJPLrvLrGcdfSxLTks8J1BrutXkhLRLYeumfH4nKD2nZMcp95j9nQ8vKqSeZa7FkgawkaoJDyFeMRhetqxDLVFnprvyjIKRrymoxrrTvKgpYPuBbPivH1CkBl6DwGHARIQSrabo5F0mp4exaMnlT'
})

export default sanityClient