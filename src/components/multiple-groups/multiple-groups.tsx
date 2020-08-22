import React from 'react';
import StandingsItem from '../standings-item/standings-item';
import TableHeader from '../table-header/table-header';

import styles from './multiple-groups.module.scss';

const MultipleGroups = ({ standings }): JSX.Element => {

  if (!standings)
    return null;

  const renderGroup = (group, index) => (
    <div className={styles.standing_table} key={index}>
      <h3 className={styles.group_title}>{group.group?.replace('_', ' ')}</h3>
      <TableHeader headerClass="group__header" />
      {group.table?.map((elem, index) =>
        <StandingsItem standings={elem} key={index} />
      )}
    </div>
  );

  return (
    <div className={styles.standing_groups}>
      {standings.map(renderGroup)}
    </div>
  );
};

export default MultipleGroups; 