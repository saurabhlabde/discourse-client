import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { ApolloClient } from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

interface Definition {
        kind: string;
        operation?: string;
}

const wsUrl = `ws://localhost:5000/graphql`;

const wsLink = process.browser
        ? new WebSocketLink({
                uri: wsUrl,
                options: {
                        lazy: true,
                        reconnect: true,
                        connectionParams: {
                                headers: {
                                        Authorization: `Bearer ${localStorage.getItem("JWT_TOKEN")}`,
                                        authToken: localStorage.getItem("JWT_TOKEN"),
                                },
                        },
                },
        })
        : null;

const httpLink = new HttpLink({
        uri: "http://localhost:5000/graphql",
});

const authLink = setContext(() => {
        const token = localStorage.getItem("JWT_TOKEN");
        return {
                headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                },
        };
});

const link = process.browser
        ? split(
                ({ query }) => {
                        const { kind, operation }: Definition = getMainDefinition(query);
                        return kind === "OperationDefinition" && operation === "subscription";
                },
                wsLink,
                authLink.concat(httpLink)
        )
        : httpLink;

export default new ApolloClient({
        link,
        cache: new InMemoryCache({}),
});
