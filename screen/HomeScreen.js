import React, { useState, useEffect } from "react";
import fetchData from "../data/fetchData";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const numColumns = 2; // Número de columnas en la cuadrícula
const screenWidth = Dimensions.get("window").width;
function HomeScreen({ recipe }) {
  const navigation = useNavigation();
  const [selectImage, setSelectImage] = useState(null);
  const [updateGrid, setUpdateGrid] = useState(true);
  // console.log("el fetch llego con: ",fetchData());
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        const count = result?.meals?.length;
        setData(result);
        if (result == []) {
          fetchDataAsync();
        }
        setCount(count);
      } catch (error) {
        console.error("Error fetching data in component:", error);
      }
    };
    fetchDataAsync();
  }, [updateGrid]);

  const handleRecipePress = (recipe) => {
    // console.log("el id es:", recipe.idMeal)
    // Navegar al Screen de Detalle y pasar el id de la receta como parámetro
    navigation.navigate("Details", { recipe: recipe });
    // console.log( "el platillo es:", recipe.strMeal)
  };

  const handleUpdateRecipe = () => {
    setUpdateGrid(false);
    updateGrid == false ? setUpdateGrid(true) : null;
  };

  return (
    <View>
      <View style={styles.body}>
        <View style={styles.main}>
          <Text style={styles.title}>Choose one</Text>
          <ScrollView contentContainerStyle={styles.container}>
            {data?.meals?.map((recipe) => {
              return (
                <TouchableOpacity
                  key={recipe.idMeal}
                  onPress={() => handleRecipePress(recipe.idMeal)}
                >
                  <View key={recipe.idMeal} style={styles.RecipeCard}>
                    <Image
                      key={recipe.idMeal}
                      style={styles.image}
                      source={{ uri: recipe.strMealThumb }}
                      resizeMode="contain"
                    />
                    <Text key={recipe.idMeal + 1} style={styles.recipeTitle}>
                      {recipe.strMeal}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <Button
            onPress={handleUpdateRecipe}
            title="Refresh"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
}
// region style
const styles = StyleSheet.create({
  body: {
    // display: "flex",
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "96%",
    height: "100%",
    backgroundColor: "#354353",

    alignItems: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  recipeTitle: {
    display: "flex",
    fontSize: 20,
    marginTop: "2%",
  },
  image: {
    flex: 1,
    marginTop: 5,
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 60,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 5,
    // backgroundColor: "grey",
  },
  RecipeCard: {
    width: screenWidth / numColumns - 20, // Calcula el ancho de cada elemento
    height: 140, // Altura de cada elemento
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    borderRadius: 10,
    marginHorizontal: 1,
    // marginTop: 50,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
  },
});

export default HomeScreen;
