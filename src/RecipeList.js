import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  
  const list = recipes.map((recipe, index) => (
  <Recipe deleteRecipe={deleteRecipe} recipe={recipe} index={index} key={index} />
  ))

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th className="slim">Name</th>
            <th className="slim">Cuisine</th>
            <th className="slim">Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th className="slim">Actions</th>
          </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
