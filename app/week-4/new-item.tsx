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

"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  // Validation state
  const [nameTouched, setNameTouched] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name.trim().length < 2) {
      setNameTouched(true);
      return;
    }

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);

    alert(
      `Item Added:
Name: ${name}
Quantity: ${quantity}
Category: ${category}`
    );

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
    setNameTouched(false);
  }

  const isNameInvalid = nameTouched && name.trim().length < 2;
  const isSubmitDisabled = name.trim().length < 2;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md space-y-4 rounded-lg bg-white p-6 shadow-md"
    >
      {/* Item Name */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Item Name
        </label>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setNameTouched(true)}
          onFocus={() => setNameTouched(false)}
          className={`mt-1 w-full rounded border p-2 text-black placeholder-black focus:outline-none ${
            isNameInvalid
              ? "border-red-500 focus:border-red-500"
              : "border-slate-300 focus:border-blue-500"
          }`}
        />

        {isNameInvalid && (
          <p className="mt-1 text-sm text-red-500">
            Item name must be at least 2 characters.
          </p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Quantity
        </label>
        <input
          type="number"
          min="1"
          max="99"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full rounded border border-slate-300 p-2 text-black focus:border-blue-500 focus:outline-none"
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

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="w-full rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        Add Item
      </button>
    </form>
  );
}
