  import type { Ingredient } from '@garlic/types';

  const Ingredients = () => {
    const ingredients: Ingredient[] = [
      {'name': 'onion', quantity: 1, measure: "unit"},
      {'name': 'garlic', quantity: 3, measure: "heads"},
    ];

    return (
      <ul>
        {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name} ({ingredient.quantity} {ingredient.measure})
            </li>
          ))
        }
      </ul>
    );
  };

  export default Ingredients;