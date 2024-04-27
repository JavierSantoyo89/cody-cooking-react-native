const baseUrl = "https://www.themealdb.com/api/json/v1/1/";

const getRandomLetter = () => {
  // Obtener un número aleatorio entre 0 y 25
  const randomIndex = Math.floor(Math.random() * 26);
  // Convertir el número en un carácter del alfabeto
  const randomLetter = String.fromCharCode(65 + randomIndex);
  return randomLetter;
};

export { baseUrl, getRandomLetter };
