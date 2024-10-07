export async function fetchData(url) {
  try {
    console.log("Inside fetchData");
    const response = await fetch(url);
    const responseData = await response.json();
    // console.log("response ",responseData); 
    
    return responseData;
  } catch (err) {
    console.log("Error: ", err);
  }
}
export default  fetchData;


