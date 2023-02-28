import {gql} from '@apollo/client';

export const getArticles = gql`
query Articles {
    Articles {
        items {
            _id
            title  
            featured_image {
                url(width: 1920)
            }
            author {
                name
                _slug
                image {
                    url(width: 1920)
                }
            }
            category {
                name
            }
            _created_on
            _slug
            featured_post
        }
    }
}`

export const getArticle = gql`
query Article($slug: String!) {
    Article(slug: $slug) {
        _id
        title
        _created_on
        content {
        ... on Text {
                _type
                html
                text
            }
        ... on Assets {
                _type
                items {
                    url(width: 1920)
                    name
                }
            }
        ... on BlockQuote {
                _id
                quote
                person
            }
        }
        featured_image {
            url
            name
        }
        author {
            _slug
            name
            job
            bio
            image {
                url(width: 1920)
                name
            }
        }
        category {
            name
            _slug
            image {
                url(width: 1920)
                name
            }
        }
    },
}`

export const getSimilarArticles = gql`
query Similar_Articles($similarId: String!, $limit: Int!) {
    Similar_Articles(limit: $limit, id: $similarId) {
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

export const getBookmarkedArticles = gql`
{
    Articles(where: {_personalize_bookmarked: true}) {
        items {
            _id
            title
            featured_image {
                url(width: 1920)
            }
            author {
                name
                _slug
                image {
                    url(width: 1920)
                }
            }
            category {
                name
            }
            _created_on
            _slug
            featured_post
        }
    }
}`

export const getArticlesByCategory = gql`query Articles($where: ArticleWhereInput) {
    Articles(where: $where) {
        items {
            _slug
            _id
            title
            featured_image {
                url
                name
            }
            _created_on
            content {
            ... on Text {
                    _id
                    _type
                    html
                    body
                    text
                    format
                }
            ... on Assets {
                    _type
                    items {
                        url(width: 1920)
                        name
                    }
                }
            ... on BlockQuote {
                    _id
                    quote
                    person
                }
            }
            author {
                _slug
                bio
                job
                name
                image {
                    url(width: 1920)
                    name
                }
            }
            category {
                name
                image {
                    url(width: 1920)
                    name
                }
                _slug
            }
        }
    }
}`