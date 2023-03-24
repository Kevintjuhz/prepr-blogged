import {gql} from '@apollo/client';

export const getHomePage = gql`{
    Page (id: "92bad35b-18f7-4512-a37d-f0a682fa8393") {
        _id
        name
        _slug
        content {
            __typename
        ... on Header {
                _id
                title
                background_image {
                    url(width: 1920)
                } 
                subtitle
            }
        ... on Article {
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
        ... on HTML {
                editor
        } 
        ... on CTAMain { 
                _id
                header
                link {
                    url
                    body
                }
                tagline
            }
        }
    }
}`

export const getHomePageAB = gql`
{
    Page (id: "92bad35b-18f7-4512-a37d-f0a682fa8393") {
        _id
        name
        _slug
        content {
            __typename
        ... on Header {
                _id
                title
                background_image {
                    url(width: 1920)
                } 
                subtitle
            }
        ... on Article {
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
        ... on HTML {
                editor 
        }
        ... on CTAMain { 
                _id
                header
                link {
                    url
                    body
                }
                tagline
            }
        }
\t\t\t\t_ab_testing_variation {
_id
        name
        _slug
        content {
            __typename
        ... on Header {
                _id
                title
                background_image {
                    url(width: 1920)
                } 
                subtitle
            }
        ... on Article {
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
        ... on HTML {
                editor
        }
        ... on CTAMain { 
                _id
                header
                link {
                    url
                    body
                }
                tagline
            }
        }
}
    }
}`