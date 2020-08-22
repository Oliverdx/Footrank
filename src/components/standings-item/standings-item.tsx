import React from 'react'

import styles from './standings-item.module.scss';

const StandingsItem = ({ standings }): JSX.Element => {

  if (!standings) {
    return null;
  }

  const { team, position, won, lost, draw, points } = standings;

  return (
    <div className={styles.standingsItem} key={team.id}>
      <span className={styles.text_center}>{position}</span>
      <span className="team-name">{team?.name}</span>
      <span className={styles.text_center}>{won}</span>
      <span className={styles.text_center}>{lost}</span>
      <span className={styles.text_center}>{draw}</span>
      <span className={styles.text_center}>{points}</span>
    </div>
  );
}

export default StandingsItem;