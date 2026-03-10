// import ItemList from "./item-list";

// export default function Page() {
//   return (
//     <main className="p-5">
//       <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
//       <ItemList />
//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import NewItem from "./new-item";
// import ItemList from "./item-list";
// import itemsData from "./items.json";

// export default function Page() {
//   // Initialize state with the JSON data
//   const [items, setItems] = useState(itemsData);

//   // Handler to add a new item to the state array
//   const handleAddItem = (newItem: any) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   return (
//     <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center">
//       <div className="w-full max-w-xl">
//         <h1 className="text-3xl font-bold text-white mb-8 text-center">
//           Shopping List
//         </h1>
        
//         {/* Form to add items */}
//         <div className="mb-8">
//           <NewItem onAddItem={handleAddItem} />
//         </div>

//         {/* The list display */}
//         <ItemList items={items} />
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import NewItem from "./new-item";
// import ItemList from "./item-list";
// import MealIdeas from "./meal-ideas";
// import itemsData from "./items.json";

// interface ItemObject {
//   id: string;
//   name: string;
//   quantity: number;
//   category: string;
// }

// export default function Page() {
//   const [items, setItems] = useState<ItemObject[]>(itemsData);
//   const [selectedItemName, setSelectedItemName] = useState<string>("");

//   const handleAddItem = (newItem: ItemObject) => {
//     setItems((prevItems) => [...prevItems, newItem]);
//   };

//   const handleItemSelect = (item: ItemObject) => {
//     // regex to remove emojis and special chars
//     const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDDFF])/g;
    
//     const cleanName = item.name
//       .split(',')[0]           // Remove everything after a comma
//       .replace(emojiRegex, '') // Remove emojis
//       .trim();                 // Clean up whitespace
    
//     setSelectedItemName(cleanName);
//   };

//   return (
//     <main className="min-h-screen bg-slate-950 p-8">
//       <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      
//       <div className="flex flex-col lg:flex-row gap-10">
//         <div className="flex-1 max-w-md">
//           <NewItem onAddItem={handleAddItem} />
//           <ItemList items={items} onItemSelect={handleItemSelect} />
//         </div>

//         <div className="flex-1">
//           <MealIdeas ingredient={selectedItemName} />
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useUserAuth } from "../_utils/auth-context";
// // ... your previous imports (NewItem, ItemList, MealIdeas, itemsData)

// export default function ShoppingListPage() {
//   const { user } = useUserAuth();

//   // Protect the page: If no user, show a message or redirect
//   if (!user) {
//     return (
//       <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
//         <p className="text-2xl mb-4">You must be logged in to view this page.</p>
//         <a href="/week-8" className="text-orange-400 underline">Return to Login Page</a>
//       </main>
//     );
//   }

//   // ... rest of your existing Shopping List return logic from Week 7 ...
//   return (
//     <main className="min-h-screen bg-slate-950 p-8">
//       {/* Your Week 7 content here */}
//     </main>
//   );
// }

"use client";

import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // 1. Protection Check
  if (!user) {
    return (
      <main className="p-8">
        <p className="text-xl mb-4 text-red-500">You must be logged in to view this page.</p>
        <a href="/week-8" className="text-blue-500 hover:underline">Return to Login</a>
      </main>
    );
  }

  // 2. Main Logic (only runs if user is logged in)
  const handleAddItem = (newItem: any) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item: any) => {
    const cleanName = item.name
      .split(',')[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDDFF])/g, '')
      .trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="p-8 bg-slate-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-8 text-white">Shopping List</h1>
      <div className="flex gap-10">
        <div className="flex-1 max-w-sm">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}