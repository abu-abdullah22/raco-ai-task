"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import { Cpu, Database, Lightbulb } from "lucide-react";
import { useRef } from "react";
import styles from "./InsightFlow.module.css";

export function InsightFlow() {
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: "ingest",
      icon: Database,
      title: "Ingest Data",
      description: "Seamlessly connect to any data source. Unify streams into a single source of truth.",
      color: "var(--color-electric-blue)",
    },
    {
      id: "analyze",
      icon: Cpu,
      title: "Analyze with AI",
      description: "Our neural architecture processes millions of data points in real-time to find patterns.",
      color: "var(--color-alert)", // Using alert color for distinctness, or maybe purple
    },
    {
      id: "insight",
      icon: Lightbulb,
      title: "Generate Insight",
      description: "Receive actionable, structured intelligence ready for decision-making.",
      color: "var(--color-data-stream)",
    },
  ];

  return (
    <section className={styles.section} ref={containerRef}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.heading}>The Intelligence Pipeline</h2>
          <p className={styles.subheading}>From chaos to clarity in three steps.</p>
        </div>

        <div className={styles.grid}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.card}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={styles.iconWrapper} style={{ color: step.color }}>
                  <step.icon size={32} />
                </div>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDescription}>{step.description}</p>
                <div className={styles.cardVisual} style={{ borderColor: step.color }}>
                    {/* Abstract visual for each step */}
                    <div className={styles.scanline} style={{ backgroundColor: step.color }} />
                </div>
              </motion.div>
            ))}
        </div>
      </Container>
    </section>
  );
}
