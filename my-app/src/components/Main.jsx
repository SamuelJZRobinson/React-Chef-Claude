import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} className="form-add-ingredient">
        <input
          placeholder="E.g., Tomato"
          aria-label="Add Ingredient"
          name="ingredient"
        ></input>
        <button type="submit">Add ingredient</button>
      </form>
      <div id="ingredients">
        <h1>Ingredients Available:</h1>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
