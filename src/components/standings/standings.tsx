import React from 'react';
import SingleGroup from '../single-group/single-group';
import MultipleGroups from '../multiple-groups/multiple-groups';

import styles from './standings.module.scss';

const Standings = ({ title, standings }): JSX.Element => {
  if (!title && !standings)
    return null;

  const hasSingleGroup = standings.length === 1;

  return (
    <div className={styles.standing}>
      <h2 className={styles.standing__title}>{title?.name} - {title?.area?.name}</h2>
      {hasSingleGroup ? (
        <SingleGroup standings={standings} />) :
        (<MultipleGroups standings={standings} />)
      }
    </div>
  )
};

export default Standings;
