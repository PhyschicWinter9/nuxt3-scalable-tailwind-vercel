// Wordpress Composable
//  A Collection of Composables for interacting with the Wordpress API
//  https://developer.wordpress.org/rest-api/reference/

import { Blogs } from '~/types/post'


export default () => {
    const  config = useRuntimeConfig()
    const  WP_URI: string = config.wpUri

    const get = async <T>(endpoint: string) => {
        return useFetch<T>(`${WP_URI}/wp-json/wp/v2/${endpoint}`)
    }

    const getPosts = async (
        category?: number,
        page: number = 1,
        perPage: number = 20,
        fields: string = 'author,categories,date,excerpt,featured_media,id,link,slug,title',
            ) => {
        let query: string = `posts?page=${page}&per_page=${perPage}`;
        if (category) {
            query += `&categories=${category}`
        }
        return get<Blogs[]>(query)
    }

        // Get a single post
    const getPost = async (slug: string) => {
        return get<Blogs[]>(`posts?slug=${slug}&_embed=1`);
    }

    const getCategories = async (field: string = 'name,slug,count') => {
        return get<any>('categories')
    }

    const getCategory = async (slug: string) => {
        return get<any>(`categories?slug=${slug}`)
    }

    return {
        get,
        getPosts,
        getPost,
        getCategories,
        getCategory
    }
}