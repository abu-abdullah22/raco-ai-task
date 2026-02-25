"use client";

import { Container } from "@/components/ui/Container";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRef } from "react";
import styles from "./Signature.module.css";

const SignatureVisual = dynamic(() => import("./SignatureVisual"), {
  ssr: false,
  loading: () => <div className={styles.placeholder} />,
});

export function Signature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const status = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9],
    [
      "INCOHERENT DATA STREAM",
      "DETECTING LATENT PATTERNS",
      "SYNTHESIZING INTELLIGENCE",
      "CRYSTALLIZED STRATEGY",
    ]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section className={styles.section} ref={containerRef}>
      <Container className={styles.container}>
        <div className={styles.content}>
          <motion.div className={styles.statusBadge} style={{ opacity }}>
            <motion.span className={styles.statusText}>{status}</motion.span>
          </motion.div>
          <h2 className={styles.heading}>Intelligence Crystallized</h2>
          <p className={styles.description}>
            Watch as raw, unstructured signals converge into a clear, actionable
            geometric core through Xai's neural architecture.
          </p>
        </div>
      </Container>
      <div className={styles.visualContainer}>
        <SignatureVisual />
      </div>
    </section>
  );
}
