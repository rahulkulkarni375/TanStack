export async function fetchData() {
  try {
    console.log("Inside fetchData");
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    console.log("Error: ", err);
  }
}
export default  fetchData;