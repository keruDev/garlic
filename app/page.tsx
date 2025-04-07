import { Ingredient } from "@garlic/types";
import { Ingredients } from "@garlic/ui";

export default function Page() {
  const ingredients: Ingredient[] = [
    {'name': 'onion', quantity: 1, measure: "unit"},
    {'name': 'garlic', quantity: 3, measure: "heads"},
  ];

  return (
    <div className="min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <Ingredients ingredients={ingredients} className="bg-blue-500 text-white p-4 rounded-lg" />
      </main>
    </div>
  );
}
