const fetchDataByID = async (recipe) => {
  try {
    const id = recipe;
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Error durante el fetch", error);
  }
};
export default fetchDataByID;
