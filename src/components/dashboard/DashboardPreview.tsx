"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BarChart3,
    Home,
    MoreHorizontal,
    PieChart,
    Search,
    Settings,
    Users
} from "lucide-react";
import styles from "./DashboardPreview.module.css";

export function DashboardPreview() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headerText}>
          <h2>Structured Intelligence</h2>
          <p>A workspace designed for clarity.</p>
        </div>

        <motion.div 
          className={styles.dashboardWindow}
          initial={{ opacity: 0, y: 100, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Sidebar */}
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <div className={styles.logo} />
              <span>Xai</span>
            </div>
            <nav className={styles.nav}>
              <div className={styles.navItem + " " + styles.active}>
                <Home size={18} />
                <span>Overview</span>
              </div>
              <div className={styles.navItem}>
                <BarChart3 size={18} />
                <span>Analytics</span>
              </div>
              <div className={styles.navItem}>
                <Users size={18} />
                <span>Customers</span>
              </div>
              <div className={styles.navItem}>
                <PieChart size={18} />
                <span>Reports</span>
              </div>
              <div className={styles.spacer} />
              <div className={styles.navItem}>
                <Settings size={18} />
                <span>Settings</span>
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className={styles.main}>
            {/* Top Bar */}
            <header className={styles.topBar}>
              <div className={styles.breadcrumb}>Overview / Real-time</div>
              <div className={styles.search}>
                <Search size={14} />
                <span>Search...</span>
              </div>
              <div className={styles.user} />
            </header>

            {/* Dashboard Content */}
            <div className={styles.content}>
               <div className={styles.statsGrid}>
                  <div className={styles.statCard}>
                    <div className={styles.statLabel}>Total Revenue</div>
                    <div className={styles.statValue}>$1,204,500</div>
                    <div className={styles.statChange + " " + styles.positive}>
                      <ArrowUpRight size={14} /> 12%
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statLabel}>Active Users</div>
                    <div className={styles.statValue}>84,320</div>
                     <div className={styles.statChange + " " + styles.positive}>
                      <ArrowUpRight size={14} /> 5.2%
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statLabel}>Processing</div>
                    <div className={styles.statValue}>45ms</div>
                    <div className={styles.statSub}>Avg. Latency</div>
                  </div>
               </div>

               <div className={styles.mainChart}>
                  <div className={styles.chartHeader}>
                    <h3>Traffic Analysis</h3>
                    <MoreHorizontal size={16} className={styles.iconBtn} />
                  </div>
                  <div className={styles.chartArea}>
                    {/* Mock Bars */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div 
                        key={i} 
                        className={styles.bar}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${20 + Math.random() * 80}%` }}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      />
                    ))}
                  </div>
               </div>

               <div className={styles.rowGrid}>
                  <div className={styles.listCard}>
                     <div className={styles.listHeader}>Recent Signals</div>
                     {[1, 2, 3].map((i) => (
                       <div key={i} className={styles.listItem}>
                         <div className={styles.statusDot} />
                         <div className={styles.listText}>
                           <div className={styles.listPrimary}>Anomaly Detected in Cluster {i}</div>
                           <div className={styles.listSecondary}>2 mins ago</div>
                         </div>
                       </div>
                     ))}
                  </div>
                  <div className={styles.listCard}>
                      <div className={styles.listHeader}>System Status</div>
                       {/* Abstract Status Visualization */}
                       <div className={styles.statusVisual}>
                          <div className={styles.ring} />
                          <div className={styles.ring} style={{animationDelay: '1s'}} />
                          <div className={styles.core} />
                       </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
