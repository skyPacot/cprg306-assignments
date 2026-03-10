// interface ItemProps {
//   name: string;
//   quantity: number;
//   category: string;
// }

// export default function Item({ name, quantity, category }: ItemProps) {
//   return (
//     <li className="bg-slate-100 border border-slate-300 rounded-lg p-4 shadow-sm">
//       <p className="font-semibold">{name}</p>
//       <p className="text-sm text-slate-600">
//         Quantity: {quantity} | Category: {category}
//       </p>
//     </li>
//   );
// }

interface ItemProps {
  name: string;
  quantity: number;
  category: string;
  onSelect: (name: string) => void; // Function that takes a string and returns nothing
}

export default function Item({ name, quantity, category, onSelect }: ItemProps) {
  return (
    <li 
      onClick={() => onSelect(name)} 
      className="p-2 m-4 bg-slate-900 max-w-sm border-l-4 border-orange-500 cursor-pointer hover:bg-orange-800 transition-colors"
    >
      <h2 className="text-xl font-bold text-white">{name}</h2>
      <div className="text-sm text-gray-300">
        Buy {quantity} in <span className="italic text-orange-400">{category}</span>
      </div>
    </li>
  );
}