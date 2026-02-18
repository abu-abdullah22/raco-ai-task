"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import styles from "./Hero.module.css";

const HeroVisual = dynamic(() => import("@/components/3d/HeroVisual"), {
  ssr: false,
  loading: () => <div className={styles.visualPlaceholder} />,
});

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.visualBackdrop}>
        <HeroVisual />
      </div>
      
      <Container className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>New Intelligence Architecture</span>
          </div>
          
          <h1 className={styles.title}>
            From Raw Data to <br />
            <span className={styles.highlight}>Actionable Insight</span>
          </h1>
          
          <p className={styles.description}>
            Xai turns complex data streams into structured intelligence. 
            The workspace for decision-makers who need clarity, not noise.
          </p>
          
          <div className={styles.actions}>
            <Button size="lg" className={styles.primaryButton}>
              Start Intelligence
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
