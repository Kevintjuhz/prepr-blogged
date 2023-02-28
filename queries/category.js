import {gql} from '@apollo/client';

export const getCategory = gql`
query Category($slug: String) {
    Category(slug: $slug) {
        image {
          url
          name
        }
        name
      }
}`