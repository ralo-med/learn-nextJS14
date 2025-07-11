"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../app/styles/navigation.module.css";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          NETFLIX
        </Link>

        <div className={styles.navLinks}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Home
          </Link>
          <Link
            href="/about-us"
            className={pathname === "/about-us" ? styles.active : ""}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
