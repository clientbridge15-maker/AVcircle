import React from 'react';
import { Card } from '../ui/Card';
import styles from './CommunityPulse.module.css';

export function CommunityPulse() {
  const stats = [
    { value: '18', label: 'Top Contributors', color: 'blue' },
    { value: '05', label: 'Popular Topics', color: 'blue' },
    { value: '1.2K', label: 'Active Members', color: 'darkBlue' },
    { value: '03', label: 'Announcements', color: 'purple' },
  ];

  return (
    <Card className={styles.pulseCard}>
      <h3 className={styles.title}>COMMUNITY PULSE</h3>
      
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.statItem} ${styles[stat.color]}`}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
