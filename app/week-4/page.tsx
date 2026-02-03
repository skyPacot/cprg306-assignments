import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="mb-6 text-3xl font-bold text-slate-800">
        Add New Item
      </h1>
      <NewItem />
    </main>
  );
}
