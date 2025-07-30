export default function Ingredients(props) {
  return (
    <div id="ingredients">
      <h1>Ingredients Available</h1>
      <ul>
        {props.ingredientsList.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
