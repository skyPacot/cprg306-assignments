// "use client";

// import { useState } from "react";
// import Item from "./item";
// import itemsData from "./items.json";

// export default function ItemList() {

//   const [sortBy, setSortBy] = useState("name");

//   let items = [...itemsData];

//   if (sortBy === "name") {
//     items.sort((a, b) => a.name.localeCompare(b.name));
//   }

//   if (sortBy === "category") {
//     items.sort((a, b) => a.category.localeCompare(b.category));
//   }

//   if (sortBy === "group") {

//     const grouped = items.reduce((groups, item) => {
//       if (!groups[item.category]) {
//         groups[item.category] = [];
//       }

//       groups[item.category].push(item);
//       return groups;
//     }, {});

//     return (
//       <div>

//         <div className="mb-4 space-x-2">

//           <button
//             onClick={() => setSortBy("name")}
//             className={`px-3 py-1 rounded ${
//               sortBy === "name" ? "bg-orange-400" : "bg-orange-700"
//             }`}
//           >
//             Sort by Name
//           </button>

//           <button
//             onClick={() => setSortBy("category")}
//             className={`px-3 py-1 rounded ${
//               sortBy === "category" ? "bg-orange-400" : "bg-orange-700"
//             }`}
//           >
//             Sort by Category
//           </button>

//           <button
//             onClick={() => setSortBy("group")}
//             className={`px-3 py-1 rounded ${
//               sortBy === "group" ? "bg-orange-400" : "bg-orange-700"
//             }`}
//           >
//             Group by Category
//           </button>

//         </div>

//         {Object.keys(grouped)
//           .sort()
//           .map((category) => (
//             <div key={category}>
//               <h2 className="text-2xl font-bold capitalize mt-4">
//                 {category}
//               </h2>

//               <ul>
//                 {grouped[category]
//                   .sort((a, b) => a.name.localeCompare(b.name))
//                   .map((item) => (
//                     <Item
//                       key={item.id}
//                       name={item.name}
//                       quantity={item.quantity}
//                       category={item.category}
//                     />
//                   ))}
//               </ul>
//             </div>
//           ))}
//       </div>
//     );
//   }

//   return (
//     <div>

//       <div className="mb-4 space-x-2">

//         <button
//           onClick={() => setSortBy("name")}
//           className={`px-3 py-1 rounded ${
//             sortBy === "name" ? "bg-orange-400" : "bg-orange-700"
//           }`}
//         >
//           Sort by Name
//         </button>

//         <button
//           onClick={() => setSortBy("category")}
//           className={`px-3 py-1 rounded ${
//             sortBy === "category" ? "bg-orange-400" : "bg-orange-700"
//           }`}
//         >
//           Sort by Category
//         </button>

//         <button
//           onClick={() => setSortBy("group")}
//           className={`px-3 py-1 rounded ${
//             sortBy === "group" ? "bg-orange-400" : "bg-orange-700"
//           }`}
//         >
//           Group by Category
//         </button>

//       </div>

//       <ul>
//         {items.map((item) => (
//           <Item
//             key={item.id}
//             name={item.name}
//             quantity={item.quantity}
//             category={item.category}
//           />
//         ))}
//       </ul>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  // 1. Handle Sorting
  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  // 2. Handle Grouping (for the 3rd button logic)
  const groupedItems = itemsData.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof itemsData>);

  // Sort categories alphabetically
  const sortedCategories = Object.keys(groupedItems).sort();

  return (
    <div className="mt-8">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-white">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy("grouped")}
          className={`px-4 py-2 rounded ${sortBy === "grouped" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
        >
          Grouped Category
        </button>
      </div>

      <ul>
        {sortBy !== "grouped" ? (
          // Standard Sorted List
          sortedItems.map((item) => (
            <Item key={item.id} {...item} />
          ))
        ) : (
          // Grouped List
          sortedCategories.map((category) => (
            <li key={category} className="mb-4">
              <h3 className="text-lg font-bold text-white capitalize px-4">{category}</h3>
              {groupedItems[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <Item key={item.id} {...item} />
                ))}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}