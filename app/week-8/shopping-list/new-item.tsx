// "use client";

// import { useState } from "react";

// export default function NewItem() {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [category, setCategory] = useState("produce");

//   // Validation state
//   const [nameTouched, setNameTouched] = useState(false);

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (name.trim().length < 2) {
//       setNameTouched(true);
//       return;
//     }

//     const item = {
//       name,
//       quantity,
//       category,
//     };

//     console.log(item);

//     alert(
//       `Item Added:
// Name: ${name}
// Quantity: ${quantity}
// Category: ${category}`
//     );

//     // Reset form
//     setName("");
//     setQuantity(1);
//     setCategory("produce");
//     setNameTouched(false);
//   }

//   // Name is invalid if field was touched and has fewer than 2 characters
//   const isNameInvalid = nameTouched && name.trim().length < 2;

//   // Disable submit if name is invalid
//   const isSubmitDisabled = name.trim().length < 2;

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md"
//     >
//       {/* Item Name */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Item Name
//         </label>
//         <input
//           type="text"
//           placeholder="Item name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onBlur={() => setNameTouched(true)}
//           className={`mt-1 w-full rounded border p-2 text-black placeholder-black focus:outline-none ${
//             isNameInvalid
//               ? "border-red-500 focus:border-red-500"
//               : "border-slate-300 focus:border-blue-500"
//           }`}
//         />

//         {isNameInvalid && (
//           <p className="mt-1 text-sm text-red-500">
//             Item name must be at least 2 characters.
//           </p>
//         )}
//       </div>

//       {/* Quantity */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Quantity
//         </label>
//         <input
//           type="number"
//           min="1"
//           max="99"
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
//         />
//       </div>

//       {/* Category */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Category
//         </label>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
//         >
//           <option value="produce">Produce</option>
//           <option value="dairy">Dairy</option>
//           <option value="bakery">Bakery</option>
//           <option value="meat">Meat</option>
//           <option value="frozen foods">Frozen Foods</option>
//           <option value="canned goods">Canned Goods</option>
//           <option value="dry goods">Dry Goods</option>
//           <option value="beverages">Beverages</option>
//           <option value="snacks">Snacks</option>
//           <option value="household">Household</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isSubmitDisabled}
//         className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
//       >
//         Add Item
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function NewItem() {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [category, setCategory] = useState("produce");

//   // Validation state
//   const [nameTouched, setNameTouched] = useState(false);

//   function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     if (name.trim().length < 2) {
//       setNameTouched(true);
//       return;
//     }

//     const item = {
//       name,
//       quantity,
//       category,
//     };

//     console.log(item);

//     alert(
//       `Item Added:
// Name: ${name}
// Quantity: ${quantity}
// Category: ${category}`
//     );

//     // Reset form
//     setName("");
//     setQuantity(1);
//     setCategory("produce");
//     setNameTouched(false);
//   }

//   const isNameInvalid = nameTouched && name.trim().length < 2;
//   const isSubmitDisabled = name.trim().length < 2;

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md"
//     >
//       {/* Item Name */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Item Name
//         </label>
//         <input
//           type="text"
//           placeholder="Item name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           onBlur={() => setNameTouched(true)}
//           onFocus={() => setNameTouched(false)}
//           className={`mt-1 w-full rounded border p-2 text-black placeholder-black focus:outline-none ${
//             isNameInvalid
//               ? "border-red-500 focus:border-red-500"
//               : "border-slate-300 focus:border-blue-500"
//           }`}
//         />

//         {isNameInvalid && (
//           <p className="mt-1 text-sm text-red-500">
//             Item name must be at least 2 characters.
//           </p>
//         )}
//       </div>

//       {/* Quantity */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Quantity
//         </label>
//         <input
//           type="number"
//           min="1"
//           max="99"
//           value={quantity}
//           onChange={(e) => setQuantity(Number(e.target.value))}
//           className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
//         />
//       </div>

//       {/* Category */}
//       <div>
//         <label className="block text-sm font-medium text-slate-700">
//           Category
//         </label>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
//         >
//           <option value="produce">Produce</option>
//           <option value="dairy">Dairy</option>
//           <option value="bakery">Bakery</option>
//           <option value="meat">Meat</option>
//           <option value="frozen foods">Frozen Foods</option>
//           <option value="canned goods">Canned Goods</option>
//           <option value="dry goods">Dry Goods</option>
//           <option value="beverages">Beverages</option>
//           <option value="snacks">Snacks</option>
//           <option value="household">Household</option>
//           <option value="other">Other</option>
//         </select>
//       </div>

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={isSubmitDisabled}
//         className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
//       >
//         Add Item
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useState } from "react";


// export default function NewItem({ onAddItem }: { onAddItem: (item: any) => void }) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [category, setCategory] = useState("produce");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Create the item object
//     const item = {
//       id: Math.random().toString(36).substr(2, 9), // Simple ID generator
//       name,
//       quantity,
//       category,
//     };

//     // Call the prop function passed from page.tsx
//     onAddItem(item);

//     // Reset form fields
//     setName("");
//     setQuantity(1);
//     setCategory("produce");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded-lg shadow-md">
//       {/* ... Your existing form inputs (Name, Quantity, Category) ... */}
//       {/* Ensure your Submit button is inside this form */}
//       <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
//         + Add Item
//       </button>
//     </form>
//   );
// }

// "use client";

// import { useState } from "react";

// export default function NewItem({ onAddItem }: { onAddItem: (item: any) => void }) {
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [category, setCategory] = useState("produce");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Create the item object
//     const item = {
//       id: Math.random().toString(36).substr(2, 9), // Simple ID generator
//       name,
//       quantity,
//       category,
//     };

//     // Call the prop function passed from page.tsx
//     onAddItem(item);

//     // Reset form fields
//     setName("");
//     setQuantity(1);
//     setCategory("produce");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-slate-900 rounded-lg shadow-md">
//       {/* ... Your existing form inputs (Name, Quantity, Category) ... */}
//       {/* Ensure your Submit button is inside this form */}
//       <button type="submit" className="w-full mt-4 bg-blue-500 text-white p-2 rounded">
//         + Add Item
//       </button>
//     </form>
//   );
// }

"use client";

import { useState } from "react";

// Define the interface for the prop
interface NewItemProps {
  onAddItem: (item: { 
    id: string; 
    name: string; 
    quantity: number; 
    category: string 
  }) => void;
}

export default function NewItem({ onAddItem }: NewItemProps) {
  // 1. Initialize State
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // 2. Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create the item object with a unique ID
    const newItem = {
      id: Math.random().toString(36).substring(2, 9), // Simple unique ID
      name,
      quantity,
      category,
    };

    // Trigger the callback prop passed from page.tsx
    onAddItem(newItem);

    // Reset the form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="bg-slate-900 p-6 rounded-lg shadow-lg mb-8 max-w-sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name Input */}
        <div>
          <input
            type="text"
            placeholder="Item name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-white text-black border-2 border-transparent focus:border-orange-500 outline-none"
          />
        </div>

        <div className="flex gap-4">
          {/* Quantity Input */}
          <input
            type="number"
            min="1"
            max="99"
            required
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-20 p-2 rounded-md bg-white text-black outline-none"
          />

          {/* Category Select */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="flex-1 p-2 rounded-md bg-white text-black outline-none"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md transition-colors text-2xl"
        >
          +
        </button>
      </form>
    </div>
  );
}