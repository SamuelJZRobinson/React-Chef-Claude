import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    console.log(ingredients);
  }

  return (
    <main>
      <form className="form-add-ingredient" onSubmit={handleSubmit}>
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
