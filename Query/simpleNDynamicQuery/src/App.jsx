import { useQuery } from "@tanstack/react-query";
import fetchData from "./fetchQuery";

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getData"],
    queryFn: fetchData,
  });
 
  return (
    <>
      <center>
        <div className="head">
          {isLoading && <h2>Loading...!!</h2>}
          {isError && <h2>Error !@#$%$%</h2>}
          {data && <h2>React Query / TanStack Query</h2>} 
        </div>
        <h3>**** JSON USERS ****</h3>
         {data  && 
           data.map(chunks => {
            return (
              <p key={chunks.id}>
                I'm <b>{chunks.name}</b> from <b>{chunks.address.city}</b>
              </p>
            );
          }) 
        }  
      </center>
    </>
  );
}

export default App;
