/* eslint-disable camelcase */
// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");
const {
  varieties,
  cookingTechs,
  recipes,
  ingredientQtRecipes,
  ingredients,
  quantities,
  types,
  cookingTechVars,
} = require("./database/datas");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    const queries = [];
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */

    // Optional: Truncate tables (remove existing data)
    await database.query("DELETE FROM cooking_tech_variety");
    await database.query("DELETE FROM type");
    await database.query("DELETE FROM ingredientQtRecipe");
    await database.query("DELETE FROM quantity");
    await database.query("DELETE FROM ingredient");
    await database.query("DELETE FROM potato_variety");
    await database.query("DELETE FROM cooking_tech");
    await database.query("DELETE FROM recipe");
    await database.query("DELETE FROM user");

    // Creation of reusable admin and user account
    const adminQueries = () =>
      database.query(
        "INSERT INTO user(username, email, password, is_admin) VALUES (?,?,?,?)",
        [
          "Yzus",
          "suzy.cassar@gmail.com",
          "$argon2id$v=19$m=65536,t=5,p=1$Nv4lsd4Q5rOntH2JalI2Pw$7GYdWLy9TemdyccKydNnLd9LdwPJO6T3JIr92ldZmok",
          false,
        ]
      );
    queries.push(adminQueries());

    const userQueries = () =>
      database.query(
        "INSERT INTO user(username, email, password, is_admin) VALUES (?,?,?,?)",
        [
          "Rassac",
          "suzy.cassar2@gmail.com",
          "$argon2id$v=19$m=65536,t=5,p=1$QZ8jcG2CDQf2DoFzx4sYWw$GuyTq8SnnrO2WsgzLcfw43o0f9j09og11OrsuHwrESE",
          true,
        ]
      );
    queries.push(userQueries());

    // Insert data into the 'cooking_tech' table
    const queriesCookingTech = cookingTechs.map((cookingTech) =>
      database.query("insert into cooking_tech(id, name) values (?,?)", [
        cookingTech.id,
        cookingTech.name,
      ])
    );

    queries.push(...queriesCookingTech);

    // Insert data into the 'recipe' table
    const queriesRecipe = recipes.map((recipe) =>
      database.query(
        "insert into recipe(id, title, picture, difficulty, prep_time, cooking_time, steps, user_id, cooking_tech_id, is_approved) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          recipe.id,
          recipe.title,
          recipe.picture,
          recipe.difficulty,
          recipe.prep_time,
          recipe.cooking_time,
          recipe.steps,
          recipe.user_id,
          recipe.cooking_tech_id,
          recipe.is_approved,
        ]
      )
    );

    queries.push(...queriesRecipe);

    // Insert data into the 'step' table
    const queriespotatoVariety = varieties.map((variety) =>
      database.query(
        "insert into potato_variety(id, name, outside_color, inside_color, origin, flesh, description) values (?, ?, ?, ?, ?, ?, ?)",
        [
          variety.id,
          variety.name,
          variety.outside_color,
          variety.inside_color,
          variety.origin,
          variety.flesh,
          variety.description,
        ]
      )
    );

    queries.push(...queriespotatoVariety);

    // Insert data into the 'ingredient' table
    const queriesIngredient = ingredients.map((ingredient) =>
      database.query("insert into ingredient(id, name) values (?, ?)", [
        ingredient.id,
        ingredient.name,
      ])
    );

    queries.push(...queriesIngredient);

    // Insert data into the 'type' table
    const queriesType = types.map((type) =>
      database.query("insert into type(id, name) values (?,?)", [
        type.id,
        type.name,
      ])
    );
    queries.push(...queriesType);

    // Insert data into the 'quantity' table
    const queriesQuantity = quantities.map((quantity) =>
      database.query(
        "insert into quantity(id, value, type_id) values (?, ?, ?)",
        [quantity.id, quantity.value, quantity.type_id]
      )
    );
    queries.push(...queriesQuantity);

    // Insert data into the 'ingredientQtRecipe' table
    const queriesIngredientQtRecipe = ingredientQtRecipes.map(
      (ingredientQtRecipe) =>
        database.query(
          "insert into ingredientQtRecipe(id, recipe_id, ingredient_id, quantity_id) values (?,?,?,?)",
          [
            ingredientQtRecipe.id,
            ingredientQtRecipe.recipe_id,
            ingredientQtRecipe.ingredient_id,
            ingredientQtRecipe.quantity_id,
          ]
        )
    );

    queries.push(...queriesIngredientQtRecipe);

    // Insert data into the 'cooking_tech_variety' table

    const queriesCookingTechVar = cookingTechVars.map((cookingTechVar) =>
      database.query(
        "insert into cooking_tech_variety(id, cooking_tech_id, potato_variety_id) values (?, ?, ?)",
        [
          cookingTechVar.id,
          cookingTechVar.cooking_tech_id,
          cookingTechVar.potato_variety_id,
        ]
      )
    );

    queries.push(...queriesCookingTechVar);

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
