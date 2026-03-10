// "use client";

// import { useState } from "react";
// import Item from "./item";
// import itemsData from "./items.json";

// export default function ItemList() {
//   const [sortBy, setSortBy] = useState("name");

//   // 1. Handle Sorting
//   const sortedItems = [...itemsData].sort((a, b) => {
//     if (sortBy === "name") return a.name.localeCompare(b.name);
//     if (sortBy === "category") return a.category.localeCompare(b.category);
//     return 0;
//   });

//   // 2. Handle Grouping (for the 3rd button logic)
//   const groupedItems = itemsData.reduce((acc, item) => {
//     const category = item.category;
//     if (!acc[category]) {
//       acc[category] = [];
//     }
//     acc[category].push(item);
//     return acc;
//   }, {} as Record<string, typeof itemsData>);

//   // Sort categories alphabetically
//   const sortedCategories = Object.keys(groupedItems).sort();

//   return (
//     <div className="mt-8">
//       <div className="flex items-center gap-4 mb-6">
//         <span className="text-white">Sort by:</span>
//         <button
//           onClick={() => setSortBy("name")}
//           className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
//         >
//           Name
//         </button>
//         <button
//           onClick={() => setSortBy("category")}
//           className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
//         >
//           Category
//         </button>
//         <button
//           onClick={() => setSortBy("grouped")}
//           className={`px-4 py-2 rounded ${sortBy === "grouped" ? "bg-orange-500 text-white" : "bg-orange-700 text-gray-200"}`}
//         >
//           Grouped Category
//         </button>
//       </div>

//       <ul>
//         {sortBy !== "grouped" ? (
//           // Standard Sorted List
//           sortedItems.map((item) => (
//             <Item key={item.id} {...item} />
//           ))
//         ) : (
//           // Grouped List
//           sortedCategories.map((category) => (
//             <li key={category} className="mb-4">
//               <h3 className="text-lg font-bold text-white capitalize px-4">{category}</h3>
//               {groupedItems[category]
//                 .sort((a, b) => a.name.localeCompare(b.name))
//                 .map((item) => (
//                   <Item key={item.id} {...item} />
//                 ))}
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Item from "./item";

// interface ItemObj {
//   id: string;
//   name: string;
//   quantity: number;
//   category: string;
// }

// export default function ItemList({ items }: { items: ItemObj[] }) {
//   const [sortBy, setSortBy] = useState("name");

//   // Create a copy of the items prop before sorting to maintain immutability
//   const sortedItems = [...items].sort((a, b) => {
//     if (sortBy === "name") {
//       return a.name.localeCompare(b.name);
//     }
//     if (sortBy === "category") {
//       return a.category.localeCompare(b.category);
//     }
//     return 0;
//   });

//   return (
//     <div>
//       <div className="flex gap-2 mb-4 items-center">
//         <span className="text-white">Sort by:</span>
//         <button
//           onClick={() => setSortBy("name")}
//           className={`px-4 py-2 rounded ${sortBy === "name" ? "bg-orange-500" : "bg-orange-800"}`}
//         >
//           Name
//         </button>
//         <button
//           onClick={() => setSortBy("category")}
//           className={`px-4 py-2 rounded ${sortBy === "category" ? "bg-orange-500" : "bg-orange-800"}`}
//         >
//           Category
//         </button>
//       </div>

//       <ul>
//         {sortedItems.map((item) => (
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

interface ItemObject {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

interface ItemListProps {
  items: ItemObject[];
  onItemSelect: (item: ItemObject) => void;
}

export default function ItemList({ items, onItemSelect }: ItemListProps) {
  const [sortBy, setSortBy] = useState<string>("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <div className="flex gap-4 mb-4 items-center">
        <span className="text-white">Sort by:</span>
        {["name", "category"].map((type) => (
          <button
            key={type}
            onClick={() => setSortBy(type)}
            className={`px-4 py-2 rounded capitalize ${sortBy === type ? "bg-orange-500" : "bg-orange-800 text-white"}`}
          >
            {type}
          </button>
        ))}
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            onSelect={() => onItemSelect(item)} 
          />
        ))}
      </ul>
    </div>
  );
}

