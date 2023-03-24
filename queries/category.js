import {gql} from '@apollo/client';

export const getCategory = gql`
query Category($slug: String) {
    Category(slug: $slug) {
        _id
        image {
          url
          name
        }
        name
      }
}`

export const getCategorySlugs = gql`
query Categories {
    Categories {
        items {
            _slug
        }
    }   
}`