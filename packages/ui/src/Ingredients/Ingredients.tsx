import type { Ingredient } from '@garlic/types';

type IngredientsProps = {
  ingredients: Ingredient[],
  className?: string,
}

export default function Ingredients({ ingredients, className }: IngredientsProps) {
  return (
    <div className={className}>
      <h2 className='text-2xl font-bold mb-2'>Ingredients</h2>
      <ul className='list-disc list-inside'>
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} ({ingredient.quantity} {ingredient.measure})
          </li>
        ))}
      </ul>
    </div>
  );
};
