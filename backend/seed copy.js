/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("delete from recipes_pulpits");
    await database.query("delete from ingredients_quantities_recipes");
    await database.query("delete from quantities");
    await database.query("delete from ingredients");
    await database.query("delete from recipes");
    await database.query("delete from categories");
    await database.query("delete from potatoes_varieties");
    await database.query("delete from pulpits");
    await database.query("delete from users");
    await database.query("delete from roles");

    // Insert fake data into the 'roles' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query("insert into roles(name) values (?)", ["admin"])
      );
    }

    // Insert fake data into the 'users' table
    for (let i = 0; i < 10; i += 1) {
      queries.push(
        database.query(
          "insert into users(username, email, password, role_id) values (?,?,?,?)",
          [
            faker.person.firstName(),
            faker.internet.email(),
            faker.internet.password(),
            3,
          ]
        )
      );
    }

    // Insert fake data into the 'pulpits' table
    for (let i = 0; i < 2; i += 1) {
      const type = i % 2 === 0 ? "farineuse" : "ferme";
      queries.push(
        database.query("insert into pulpits(type) values (?)", [type])
      );
    }

    // Insert fake data into the 'potatoes_varieties' table
    for (let i = 0; i < 1; i += 1) {
      queries.push(
        database.query(
          "insert into potatoes_varieties(name, outside_color, inside_color, origin, pulpit_id) values (?, ?, ?, ?, ?)",
          ["Charlotte", "jaune", "jaune", "France", 2]
        )
      );
    }

    // Insert fake data into the 'categories' table
    queries.push(
      database.query("insert into categories(name) values (?)", ["salade"])
    );

    // Insert fake data into the 'recipes' table
    queries.push(
      database.query(
        "insert into recipes(title, difficulty, cooking_time, steps, category_id, user_id, is_approved) values (?, ?, ?, ?, ?, ?, ?)",
        [
          "Salade de pomme de terre à la française",
          "facile",
          "30",
          "Lavez puis épluchez les pommes de terre./Faites-les cuire à la vapeur pendant environ 10 minutes puis réservez./Emincez les oignons puis faites-les revenir à la poele jusqu'à ce qu'ils prennent une belle couleur dorée./Ajoutez les lardons, faites-les revenir puis réservez./Immergez totalement les oeufs dans une casserole d'eau bouillante et laissez-les cuire 10 minutes puis plongez-les dans l'eau froide avant de les écailler. Coupez-les en morceau./Ajoutez l'ensemble des péparation et assaisonnez à l'huile d'olive et au vinaigre de cidre.",
          1,
          3,
          1,
        ]
      )
    );

    // Insert fake data into the 'ingredients' table
    const ingredientsToInsert = [
      "oignon",
      "oeufs",
      "pomme de terre",
      "huile d'olive",
      "vinaigre de cidre",
    ];

    for (const ingredient of ingredientsToInsert) {
      queries.push(
        database.execute("INSERT INTO ingredients (name) VALUES (?)", [
          ingredient,
        ])
      );
    }

    // Insert fake data into the 'quantites' table
    const quantitesToInsert = [
      [150, "g"],
      [4, "unit"],
      [500, "g"],
      [2, "cas"],
      [2, "cas"],
    ];

    for (const [name, value] of quantitesToInsert) {
      queries.push(
        database.execute("INSERT INTO quantities(value, unit) VALUES (?, ?)", [
          name,
          value,
        ])
      );
    }

    // Insert fake data into the 'ingredients_quantities_recipes' table
    queries.push(
      database.execute(
        "INSERT INTO ingredients_quantities_recipes(recipe_id, ingredient_id, quantity_id) VALUES (?, ?, ?)",
        ["1", "1", "1"]
      )
    );

    // Insert fake data into the 'recipes_pulpits' table
    queries.push(
      database.execute(
        "INSERT INTO recipes_pulpits(recipe_id, pulpit_id) VALUES (?, ?)",
        ["1", "2"]
      )
    );

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

  const queriesRecipe = [];

    // Insert fake data into the 'recipe' table
    for (let i = 0; i < 5; i += 1) {
      queriesRecipe.push(
        database.query("insert into recipe(title, difficulty, cooking_time, steps_id, user_id, cooking_tech_id, is_approved) values (?, ?, ?, ?, ?, ?, ?)", [
            faker.lorem.words({ min: 1, max: 3}),
            faker.lorem.words({ min: 1, max: 3}),
            faker.number.int(1000),
            faker.number.int(1000),
            faker.number.int(1000),
            faker.number.int(1000),
            faker.datatype.boolean() ? 0 : 1
          ]
        )
      );
    }

    // Wait for all the insertion queries to complete
    await Promise.all(queriesRecipe);

  // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
