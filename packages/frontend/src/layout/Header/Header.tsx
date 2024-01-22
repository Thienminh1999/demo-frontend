"use client";

import React from "react";
import Container from "../Component/Container/Container";
import styles from "./Header.module.css";
import Button from "@/UI/Button/Button";
import Link from "next/link";

function Header() {
  function handleToSignup() {}

  return (
    <Container className={styles.container}>
      <h2 className={styles.shop_title}>Minh Coffee</h2>
      <div className={styles.top_bar}>
        <ul className={styles.nav}>
          <li className={styles.nav_item}>
            <Link href="/homepage">Home</Link>
          </li>
          <li className={styles.nav_item}>Story</li>
          <li className={styles.nav_item}>
            <Link href="/menu">Menu</Link>
          </li>
          <li className={styles.nav_item}>Space</li>
          <li className={styles.nav_item}>Community</li>
          <li className={styles.nav_item}>
            <Link href="/news">News</Link>
          </li>
        </ul>
        <div className={styles.actions}>
          <Button variant="outline">Order</Button>
          <Button variant="outline" onClick={handleToSignup}>
            Sign Up
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Header;
