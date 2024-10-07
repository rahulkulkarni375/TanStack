
import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchQuery";
import { useState } from "react";

function App() {
  const [url , setUrl] = useState("https://jsonplaceholder.typicode.com/todos");
  const [toggle, setToggle] = useState(true);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getData" ,url],
    queryFn: () => fetchData(url),
  });
 
  const handleUrlChange = () => {
    if(toggle) 
      setUrl("https://jsonplaceholder.typicode.com/todos");
    else 
      setUrl("https://jsonplaceholder.typicode.com/posts");

    setToggle(!toggle);
  }
  return (
    <>
      <center>
        <div className="head">
          {isLoading && <h2>Loading...!!</h2>}
          {data && <h2>React Query / TanStack Query</h2>} 
          <button onClick={handleUrlChange}>Toggle Posts / Todos</button>
        </div>
        <h3>**** JSON  {toggle ? "POSTS" : "TODOS"} ****</h3>
         {data  && 
           data.map(chunks => {
            return (
              <div key={chunks.id}>
                <p>ID : <b>{chunks.id}</b></p> 
                <p>Title : <b>{chunks.title}</b></p>
              </div>
            );
          }) 
        }  
      </center>
    </>
  );
}

export default App;
