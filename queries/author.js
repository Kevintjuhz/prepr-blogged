import {gql} from '@apollo/client';

export const getAuthor = gql`query ($slug: String) {
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
}`

export const getAuthorSlugs = gql`query {
    Authors {
        items {
            _slug
        }
    }
}`