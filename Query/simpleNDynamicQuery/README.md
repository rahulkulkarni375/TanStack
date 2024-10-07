# Introduction    
TanStack Query (FKA React Query) is often described as the missing data-fetching library for web applications, 
but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze


## useQuery Advantages 
- Automatic Caching: Responses from queries are cached automatically, reducing the need for repeated network requests and improving performance.

- Simplified API: It provides a straightforward and intuitive API for data fetching, making it easy to implement and understand.

- Built-in Loading and Error States: It manages loading and error states automatically, allowing developers to focus on building the UI without worrying about these aspects.

- Stale Data Management: You can configure how long data is considered fresh (staleTime), allowing for better control over when to refetch.

- Automatic Refetching: Supports automatic refetching on window focus, interval-based fetching, or when network status changes, ensuring users always see the latest data.

- Optimistic Updates: Enables immediate UI updates while waiting for server responses, improving the user experience by making the app feel more responsive.

- Background Updates: Queries can be updated in the background, keeping data fresh without disrupting the user experience.

- Query Invalidation: You can easily invalidate and refetch queries after mutations or specific events, ensuring the UI remains in sync with the server state.

- Pagination and Infinite Scrolling: Built-in support for pagination and infinite scrolling simplifies handling large datasets.

- Integration with DevTools: TanStack Query provides developer tools to inspect queries and mutations, making debugging easier.

## References 
https://tanstack.com/query/latest/docs/framework/react/reference/useQuery

## Usage/Examples
Basic Info
```javascript
If you want to use  dynamic queries copy the content of 
DynamicQueryFunctions.jsx and fetchDynamicQuery.jsx  to 
App.jsx and fetchDynamicQuery.jsx respectively
```
Clone the project
```javascript
git clone / Download ZIP
```
Install dependencies
```javascript
npm i
```

Run the project
```javascript
npm run dev
```


