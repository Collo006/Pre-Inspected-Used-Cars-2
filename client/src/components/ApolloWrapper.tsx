"use client"
import client from "@/app/lib/apollo-client";
import { ApolloProvider } from "@apollo/client/react";

 // tells the server to change this to a client



export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
