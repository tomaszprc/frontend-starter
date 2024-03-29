import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;

export default function ApolloContext({ children }: Props) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children} </ApolloProvider>;
}
