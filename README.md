# Use different Apollo clients in the same react application

- Apollo Client accepts only one client uri on its initialization So if in your React application you need to retrieve data from two different GraphQL services, for example, you cannot use the same client or provider instance.

#This is a solution for this problem using @habx/apollo-multi-endpoint-link package

resources

- https://github.com/habx/apollo-multi-endpoint-link

- https://www.npmjs.com/package/@habx/apollo-multi-endpoint-link
