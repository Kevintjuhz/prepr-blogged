import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.prepr.io/557bfab9e6b119286807bcd30648d512ef992b8f73b20a9f4d6af0a8a1d399c3",
    cache: new InMemoryCache(),
});

export default client;