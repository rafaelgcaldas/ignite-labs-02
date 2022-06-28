import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4xj8xcc0ncc01ta53214mcr/master',
  cache: new InMemoryCache()
})