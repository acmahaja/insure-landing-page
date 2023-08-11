import Image from "next/image";

import styles from "@/styles/components/Sidebar.module.css";

import { useState } from "react";

export default function Sidebar() {
  const [showSideBar, toggleShowSideBar] = useState(false);
  return (
    <div className={styles.Sidebar}>
      <Image
        src="/images/icon-hamburger.svg"
        width={32}
        height={32}
        onClick={() => {
          toggleShowSideBar(!showSideBar);
        }}
        className={`${showSideBar ? styles.Show : styles.Hide} ${
          styles.Toggle
        }`}
      />

      <Image
        src="/images/icon-close.svg"
        width={32}
        height={32}
        onClick={() => {
          toggleShowSideBar(!showSideBar);
        }}
        className={`${showSideBar ? styles.Hide : styles.Show} ${
          styles.Toggle
        }`}
      />

      <ul
        onClick={() => {
          toggleShowSideBar(!showSideBar);
        }}
        className={`${styles.NavLinks} ${
          showSideBar ? styles.Hide : styles.Show
        }`}
      >
        <li>how we work</li>
        <li>blog</li>
        <li>account</li>
        <li className={styles.Selected}>view plans</li>
      </ul>
    </div>
  );
}
