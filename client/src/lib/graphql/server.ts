// client/src/lib/graphql/server.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { typeDefs } from './schema';

import { NextRequest } from 'next/server';
import { resolvers } from './resolvers';

//boiler plate
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true , // Allows GraphQL playground in development
  formatError: (error) => {
    // Optional: Custom error formatting
    console.error('GraphQL Error:', error);
    return {
      message: error.message,
      locations: error.locations,
      path: error.path,
      extensions: error.extensions,
    };
  },
});

// Create the handler for Next.js API routes
export const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => {

    
    const authHeader = req.headers.get('authorization');
    const cookies = req.cookies;
    
    return {
      req,
    };
  },
});