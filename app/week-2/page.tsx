
import Link from "next/link";
import StudentInfo from "./student-info";
export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">CPRG 306 Assignments</h1>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a href="/week-2" className="text-blue-600 hover:underline">
            Week 2
          </a>
        </li>
        <li>
          <a href="/week-3" className="text-blue-600 hover:underline">
            Week 3
          </a>
        </li>
        <li>
          <a href="/week-4" className="text-blue-600 hover:underline">
          Week 4
          </a>
        </li>
      </ul>
    </main>
  );
}
