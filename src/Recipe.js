import React from "react";

function Recipe({ recipe, index, deleteRecipe}) {
  return (
    <tr>
      <td key={index}>{recipe.name}</td>
      <td key={index}>{recipe.cuisine}</td>
      <td key={index}><img src={recipe.photo} /></td>
      <td key={index} className="content_td"><p>{recipe.ingredients}</p></td>
      <td key={index} className="content_td"><p>{recipe.preparation}</p></td>
      <td>  <button onClick={() => deleteRecipe(index)} name="delete">Delete</button> </td>
      </tr>
  );
}

export default Recipe;