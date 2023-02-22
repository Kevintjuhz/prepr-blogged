import {gql} from '@apollo/client';

export const getArticlesByCategory = gql`
query Articles($where: ArticleWhereInput, $slug: String, $limit: Int!) {
    Category(slug: $slug) {
        image {
          url
          name
        }
        name
      }

    Articles(where: $where) {
        items {
            _id
            title
            featured_image {
                url
                name
            }
            category {
                name
                _slug
                image {
                    url
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
                url
                name
            }
            _publish_on
        }
    }
}`