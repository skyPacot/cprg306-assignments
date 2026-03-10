// "use client";

// import { useState, useEffect } from "react";

// // API Fetching Function (defined outside the component)
// const fetchMealIdeas = async (ingredient) => {
//   const response = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//   );
//   const data = await response.json();
//   return data.meals || []; // Return empty array if no meals found
// };

// export default function MealIdeas({ ingredient }) {
//   const [meals, setMeals] = useState([]);

//   // Load function to update state
//   const loadMealIdeas = async () => {
//     const fetchedMeals = await fetchMealIdeas(ingredient);
//     setMeals(fetchedMeals);
//   };

//   // Trigger loadMealIdeas whenever ingredient prop changes
//   useEffect(() => {
//     if (ingredient) {
//       loadMealIdeas();
//     }
//   }, [ingredient]);

//   return (
//     <div className="p-2">
//       <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
//       {!ingredient ? (
//         <p className="text-gray-400">Select an item to see meal ideas</p>
//       ) : meals.length > 0 ? (
//         <div>
//           <p className="text-gray-300 mb-2">Here are some meal ideas using {ingredient}:</p>
//           <ul className="space-y-2">
//             {meals.map((meal) => (
//               <li 
//                 key={meal.idMeal} 
//                 className="p-2 bg-slate-800 text-white rounded hover:bg-orange-600 transition-colors cursor-pointer"
//               >
//                 {meal.strMeal}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p className="text-gray-400">No meal ideas found for {ingredient}</p>
//       )}
//     </div>
//   );
// }





"use client";

import { useState, useEffect } from "react";

// Type for a meal object returned by TheMealDB
interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb?: string;
}

// Props type for the component
interface MealIdeasProps {
  ingredient: string;
}

// API Fetching Function (typed)
const fetchMealIdeas = async (ingredient: string): Promise<Meal[]> => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || []; // Return empty array if no meals found
};

export default function MealIdeas({ ingredient }: MealIdeasProps) {
  const [meals, setMeals] = useState<Meal[]>([]);

  // Load function to update state
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // Trigger loadMealIdeas whenever ingredient prop changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-2">
      <h2 className="text-2xl font-bold text-white mb-4">Meal Ideas</h2>
      {!ingredient ? (
        <p className="text-gray-400">Select an item to see meal ideas</p>
      ) : meals.length > 0 ? (
        <div>
          <p className="text-gray-300 mb-2">
            Here are some meal ideas using {ingredient}:
          </p>
          <ul className="space-y-2">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="p-2 bg-slate-800 text-white rounded hover:bg-orange-600 transition-colors cursor-pointer"
              >
                {meal.strMeal}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-400">No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}