"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {pathname === "/" ? "✅" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {pathname === "/about-us" ? "✅" : ""}
        </li>
        <li>
          <button onClick={() => setCount(count + 1)}>Count</button>
          <p>Count: {count}</p>
        </li>
      </ul>
    </nav>
  );
}
