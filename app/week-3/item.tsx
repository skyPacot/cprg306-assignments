interface ItemProps {
  name: string;
  quantity: number;
  category: string;
}

export default function Item({ name, quantity, category }: ItemProps) {
  return (
    <li className="bg-slate-100 border border-slate-300 rounded-lg p-4 shadow-sm">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-slate-600">
        Quantity: {quantity} | Category: {category}
      </p>
    </li>
  );
}
