import {gql} from '@apollo/client';

export const getArticlesByCategory = gql`
query Articles($slug: String) {
    Category(slug: $slug) {
        image {
          url
          name
        }
        name
      }
}`