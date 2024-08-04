import instance from "./instance";

const manageIngredients = (ingredients, recipeId) => {
  const ingredientsToPush = ingredients.filter((ingredient) =>
    parseInt(ingredient.type_id, 10) !== 0
      ? ingredient.value !== "" && ingredient.name !== ""
      : ingredient.name !== ""
  );

  ingredientsToPush.forEach(async (ingredient) => {
    const currentIngredient = {
      recipe_id: recipeId,
      ingredient_id: 0,
      quantity_id: 0,
    };

    if (ingredient) {
      try {
        // try to get the ingredient from table ingredient
        let ingredientExist = await instance.get(
          `api/ingredient/${ingredient.name}`
        );

        if (ingredientExist.data === "No ingredient with this name.") {
          await instance.post("api/ingredient", { name: ingredient.name });

          ingredientExist = await instance.get(
            `api/ingredient/${ingredient.name}`
          );
        }
        currentIngredient.ingredient_id = await ingredientExist.data.id;
      } catch {
        // if error, something
      }
    }
    if (ingredient) {
      try {
        let quantityExist = await instance.get(
          `api/quantity/${
            ingredient.value.includes("/")
              ? ingredient.value.split("/").join(":")
              : ingredient.value
          }/${ingredient.type_id}`
        );

        if (quantityExist.data === "No quantity with these values.") {
          quantityExist = await instance.post("api/quantity", {
            value: ingredient.value,
            type_id: ingredient.type_id,
          });
          // console.info("Post:", quantityExist);

          quantityExist = await instance.get(
            `api/quantity/${ingredient.value}/${ingredient.type_id}`
          );
          // console.info("refetch:", quantityExist);
        }

        currentIngredient.quantity_id = await quantityExist.data.id;

        // console.info("Current ingredient with quantity_id:", currentIngredient);
      } catch (error) {
        // Log error
        console.error("Error fetching or creating quantity:", error);
      }
    }
    await instance.post("api/ingredient-quantity-recipe/", currentIngredient);
  });
};

export default manageIngredients;
