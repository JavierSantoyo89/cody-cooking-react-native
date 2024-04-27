import { baseUrl, getRandomLetter } from "../constants";
const fetchData = async () => {
  try {
    const letter = getRandomLetter();
    const response = await fetch(`${baseUrl}search.php?f=${letter}`);
    const data = await response.json();
    // console.log("La letra es:", letter);
    // console.log("La data es: ",data);
    if (data.meals === null) {
      console.log("la letra sin contenido es:", letter);
      return fetchData();
    }
    return data;
  } catch (error) {
    console.error("Error durante el fetch", error);
  }
};
export default fetchData;
