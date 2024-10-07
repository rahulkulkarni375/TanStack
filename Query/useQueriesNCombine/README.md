# Introduction    
useQueries is a hook provided by TanStack Query (formerly known as React Query) that allows you to manage multiple queries concurrently within a React component. It enables you to fetch data from multiple sources simultaneously and provides a convenient way to handle the results and states of each query.

In TanStack Query, the combine feature within useQueries allows you to combine multiple query results into a single response. This is particularly useful when you want to aggregate or manipulate data fetched from multiple sources within your component.

## Features of useQueries:
- Concurrent Fetching: You can pass an array of query configurations, allowing for simultaneous data fetching from different endpoints.

- Result Handling: It returns an array of results, where each result corresponds to a query in the input array. Each result includes data, status, and error information.

- Simplified State Management: By using useQueries, you can avoid the complexity of managing multiple individual queries, leading to cleaner and more maintainable code.

- Error and Loading States: It simplifies handling loading and error states for multiple queries, making it easy to provide feedback to users

## Features of combine in useQueries:
- Data Aggregation: By using combine, you can easily merge results from multiple queries into a single object or array, simplifying the handling of related data.

- Simplified Code: Instead of managing each query's data separately, you can streamline your component logic, making your code cleaner and easier to maintain.

- Conditional Logic: You can implement logic that determines how to combine the data based on the success or failure of individual queries.


## References 
https://tanstack.com/query/latest/docs/framework/react/reference/useQueries

## Usage/Examples
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
