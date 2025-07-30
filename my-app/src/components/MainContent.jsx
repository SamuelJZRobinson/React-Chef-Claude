import { useState } from "react";
import Ingredients from "./Ingredients";
import ClaudeRecipe from "./ClaudeRecipe";

export default function MainContent() {
  const [ingredients, setIngredients] = useState([]);
  const [answer, setAnswer] = useState("");

  const API_BODY = {
    model: "gpt-4o",
    input: [
      {
        role: "system",
        content: [
          {
            type: "input_text",
            text: "Turn the list of ingredients into a recommended recipe title, ingredients, and intructions in markdown language format",
          },
        ],
      },
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: ingredients.join("\n"),
          },
        ],
      },
    ],
    temperature: 0.5,
    max_output_tokens: 256,
  };

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient == "") {
      console.log("Ingredient blank");
      return;
    }

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  async function callOpenAIAPI() {
    if (ingredients.length === 0) {
      console.log("No ingredients provided");
      return;
    }

    await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_API_KEY,
      },
      body: JSON.stringify(API_BODY),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setAnswer(data.output[0].content[0].text.trim());
      });
  }

  return (
    <main>
      <form action={handleSubmit} className="form-add-ingredient">
        <input
          type="text"
          placeholder="E.g., Tomato"
          aria-label="Add Ingredient"
          name="ingredient"
        ></input>
        <button type="submit">Add ingredient</button>
      </form>
      <Ingredients ingredientsList={ingredients} />
      <div id="request">
        <h1>Get A Recipe</h1>
        <p>Generate a recipe quickly from the provided list of ingredients.</p>
        <button onClick={callOpenAIAPI} type="button">
          Get a recipe
        </button>
      </div>
      {answer !== "" ? <ClaudeRecipe output={answer} /> : null}
    </main>
  );
}
