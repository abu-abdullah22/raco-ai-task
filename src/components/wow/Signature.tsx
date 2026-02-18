"use client";

import { Container } from "@/components/ui/Container";
import dynamic from "next/dynamic";
import { useRef } from "react";
import styles from "./Signature.module.css";

const SignatureVisual = dynamic(() => import("./SignatureVisual"), {
  ssr: false,
  loading: () => <div className={styles.placeholder} />,
});

export function Signature() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} ref={containerRef}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Intelligence Crystallized</h2>
          <p className={styles.description}>
            Watch raw signals converge into clear, actionable strategy.
          </p>
        </div>
      </Container>
      <div className={styles.visualContainer}>
         <SignatureVisual />
      </div>
    </section>
  );
}
