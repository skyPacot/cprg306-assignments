// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <h1>CPRG 306 Webdev 2</h1>
      
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li>
          <a href="./week-2">Week 2</a>
        </li>
        <li>
          <a href="./week-3">Week 3</a>
        </li>
        <li>
          <a href="./week-4">Week 4</a>
        </li>
        <li>
          <a href="./week-5">Week 5</a>
        </li>
        <li>
          <a href="./week-6">Week 6</a>
        </li>
        <li>
          <a href="./week-7">Week 7</a>
        </li>
        <li>
          <a href="./week-8">Week 8</a>
        </li>
      </ul>
      </div>
    </main>
  );
}
