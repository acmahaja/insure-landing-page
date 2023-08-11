import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";

import Sidebar from "@/components/Sidebar";

export default function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div>
        <Image src="/images/logo.svg" width={112} height={18} />
        <Sidebar />
        <ul className={styles.NavLinks}>
          <li>how we work</li>
          <li>blog</li>
          <li>account</li>
          <li className={styles.Selected}>view plans</li>
        </ul>
      </div>
    </nav>
  );
}
