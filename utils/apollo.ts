import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import { setContext } from "apollo-link-context";

import {
        ApolloClient,
        InMemoryCache,
        NormalizedCacheObject,
} from '@apollo/client'
interface Definition {
        kind: string;
        operation?: string;
}

const URL: string = 'https://discourse-007.herokuapp.com/graphql'

const URL_WS: string = 'ws://discourse-007.herokuapp.com/graphql'

const wsLink = process.browser
        ? new WebSocketLink({
                uri: URL_WS,
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
        uri: URL,
});

const authLink = setContext(() => {
        const token = localStorage.getItem("JWT_TOKEN");
        return {
                headers: {
                        Authorization: token ? `Bearer ${token}` : "",
                },
        };
});

const link: any = process.browser
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
