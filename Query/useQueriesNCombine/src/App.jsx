import { useQuery, useQueries } from "@tanstack/react-query";
import fetchData from "./fetchQuery";

function App() {
 
 
const ids = [1, 2, 3, 4, 5]
const results = useQueries({
    queries: ids.map((id) => ({
      queryKey: ["getData" ,id],
      queryFn: async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const responseData = await response.json();
         // console.log("responseData useQueries ",responseData)
         return responseData;
      },
      staleTime: Infinity,

    })),
})

console.log("useQueries ", results)

const values = [1, 2, 3]
const combinedQueries = useQueries({
  queries: values.map((id) => ({
    queryKey: ["getData" ,id],
    queryFn: async() => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const responseData = await response.json();
       // console.log("responseData useQueries ",responseData)
       return responseData;
    },
  })),
  combine: (results) => {
    return {
      data: results.map(res => res.data),
      success: results.map(res => res.isSuccess),
    }
  },
})

console.log("combine queries ", combinedQueries)

  return (
    <>
      <center>
        <div className="head">
          <h2>useQueries and Combining Queries</h2> 
        </div>
        <b>Note : Go to console to see the output</b>
      </center>
    </>
  );
}



export default App;
