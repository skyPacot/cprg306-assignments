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

"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

interface ItemObject {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export default function Page() {
  const [items, setItems] = useState<ItemObject[]>(itemsData);
  const [selectedItemName, setSelectedItemName] = useState<string>("");

  const handleAddItem = (newItem: ItemObject) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item: ItemObject) => {
    // regex to remove emojis and special chars
    const emojiRegex = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDDFF])/g;
    
    const cleanName = item.name
      .split(',')[0]           // Remove everything after a comma
      .replace(emojiRegex, '') // Remove emojis
      .trim();                 // Clean up whitespace
    
    setSelectedItemName(cleanName);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Shopping List</h1>
      
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 max-w-md">
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