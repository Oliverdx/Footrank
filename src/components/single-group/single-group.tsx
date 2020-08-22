import React from 'react';
import StandingsItem from '../standings-item/standings-item';
import TableHeader from '../table-header/table-header';

import styles from './single-group.module.scss';

const SingleGroup = ({ standings }): JSX.Element => {

  if (!standings)
    return null;

  return (
    <div className={styles.standing_table}>
      <TableHeader headerClass="single__header" />
      {(standings[0]?.table.map((elem, index) =>
        <StandingsItem standings={elem} key={index} />
      ))}
    </div>
  );
};

export default SingleGroup