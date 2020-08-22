import React from 'react';
import styles from './table-header.module.scss';

const TableHeader = ({ headerClass }): JSX.Element => {

  return (
    <div className={styles[headerClass]}>
      <span className={styles.text_center}></span>
      <span>Team</span>
      <span className={styles.text_center}>V</span>
      <span className={styles.text_center}>L</span>
      <span className={styles.text_center}>D</span>
      <span className={styles.text_center}>P</span>
    </div>
  );

}

export default TableHeader;