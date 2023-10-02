import React, { useState } from "react";
 // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

function RecipeCreate({ recipes, setRecipes}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [formData, setFormData] = useState(initialFormState);
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
  })
  };
    
  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      formData
    ])
    setFormData({...initialFormState});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit} >
      <table>
        <tbody>
          <tr>
            <td>
            <input type="text" id="name" name="name" placeholder="Name"  onChange={handleChange} />
            </td>
            <td>
             <input type="text" id="cuisine" name="cuisine" placeholder="Cuisine"  onChange={handleChange} />
            </td>
             <td>
               <input type="url" id="photo" name="photo" placeholder="URL" onChange={handleChange} />
            </td>
            <td>
            <textarea name="ingredients" id="indgredients" rows="2" placeholder="Ingredients" onChange={handleChange}  />
            </td>
            <td>
            <textarea name="preparation" id="preparation" rows="2" placeholder="Preparation" onChange={handleChange} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
