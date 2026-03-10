// import ItemList from "./item-list";

// export default function Page() {
//   return (
//     <main className="p-5">
//       <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
//       <ItemList />
//     </main>
//   );
// }
"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  // Initialize state with the JSON data
  const [items, setItems] = useState(itemsData);

  // Handler to add a new item to the state array
  const handleAddItem = (newItem: any) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 flex flex-col items-center">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          Shopping List
        </h1>
        
        {/* Form to add items */}
        <div className="mb-8">
          <NewItem onAddItem={handleAddItem} />
        </div>

        {/* The list display */}
        <ItemList items={items} />
      </div>
    </main>
  );
}