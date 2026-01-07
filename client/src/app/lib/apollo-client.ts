// client/src/app/lib/apollo-client.ts
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const isServer = typeof window === 'undefined';

const client = new ApolloClient({
  link: new HttpLink({ 
    uri: isServer 
      ? `http://localhost:${process.env.PORT || 3000}/api/graphql`  // Server-side
      : '/api/graphql',  // Client-side (relative URL)
    credentials: 'same-origin',
  }),
  cache: new InMemoryCache(),
  ssrMode: isServer,
});

export default client;