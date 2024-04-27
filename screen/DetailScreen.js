import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import codyAvatar from "../assets/CodyAngry.png";
import fetchDataByID from "../data/fetchDataByID";
const DetailScreen = ({ navigation, route }) => {
  const { recipe } = route.params;
  // console.log("El id en details es:", recipe);
  const [detailRecipe, setDetailRecipe] = useState([]);
  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const recipeById = await fetchDataByID(recipe);
        // console.log("El result es:", recipeById);
        // console.log("El result es:", recipeById.meals[0]);
        setDetailRecipe(recipeById.meals[0]);
      } catch (error) {
        console.error("Error fetching data in component:", error);
      }
    };
    fetchDataAsync();
  }, [recipe, setDetailRecipe]);
  return (
    <ScrollView>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.title}>{detailRecipe.strMeal}</Text>
          <Image
            source={{ uri: detailRecipe.strMealThumb }}
            style={styles.image}
          />
          <View style={styles.ingredientsContainer}>
            <Text style={{ fontSize: 20, color: "white" }}>Ingredients</Text>
            <Text style={styles.ingredientsList}>
              {detailRecipe.strIngredient1}
            </Text>
            <Text style={styles.ingredientsList}>
              {detailRecipe.strIngredient2}
            </Text>
            <Text style={styles.ingredientsList}>
              {detailRecipe.strIngredient3}
            </Text>
            <Text style={styles.ingredientsList}>
              {detailRecipe.strIngredient4}
            </Text>
            <Text style={styles.ingredientsList}>
              {detailRecipe.strIngredient5}
            </Text>
          </View>
          <Text style={styles.instructions}>
            {detailRecipe.strInstructions}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    backgroundColor: "#354353",
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "01%",
    color: "white",
  },
  image: {
    flex: 1,
    marginTop: 5,
    width: "96%",
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
  },
  ingredientsContainer: {
    display: "flex",
    flexDirection: "column",
  },
  ingredientsList: {
    marginLeft: "4%",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  instructions: {
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginTop: "2%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
  },
});

export default DetailScreen;
