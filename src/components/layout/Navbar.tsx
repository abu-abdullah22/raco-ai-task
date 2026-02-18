"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(styles.navbar, scrolled && styles.scrolled)}>
      <Container className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon} />
          <span className={styles.logoText}>Xai</span>
        </div>

        <div className={styles.links}>
          <Link href="#" className={styles.link}>Platform</Link>
          <Link href="#" className={styles.link}>Solutions</Link>
          <Link href="#" className={styles.link}>Developers</Link>
          <Link href="#" className={styles.link}>Pricing</Link>
        </div>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>
      </Container>
    </nav>
  );
}
