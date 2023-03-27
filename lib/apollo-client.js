import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://graphql.prepr.io/5d395905630e4aa70627bbe85af2813f54ad6bc0813c3aee254a4ed9e063e56c",
    cache: new InMemoryCache(),
});

export default client;