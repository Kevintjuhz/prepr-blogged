import {gql} from '@apollo/client';

export const getAuthor = gql`query ($where: ArticleWhereInput, $slug: String, $limit: Int!) {
    Author (slug: $slug) {
        _id
        name
        image {
            _id
            url(width: 1920)
        } 
        job
        bio
        _slug
    }

    Articles(where: $where) { 
        items {
            _id
            title
            featured_image {
                url(width: 1920)
                name
            }
            category {
                name
                _slug
                image {
                    url(width: 1920)
                    name
                }
            }
            author {
                name
            }
            _created_on
            _slug
        }
    }
    
    Popular_Articles(limit: $limit) {
        items {
            title
            _slug
            featured_image {
                url(width: 1920)
                name
            }
            _publish_on
        }
    }
}`