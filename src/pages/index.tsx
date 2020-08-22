import React from 'react';

import styles from './index.module.scss';

import Standings from '../components/standings/standings';
import SearchRank from '../components/search-form/searchform';
import Tipbox from '../components/tipbox/tipbox';
import useStandings from '../hooks/use-stanndings/use-standings';


const HomePage = (): JSX.Element => {
  const { standings, competition, handleSubmit } = useStandings();

  return (
    <div id="app" className={styles.footrank}>
      <header className={styles.searchrank_header}>
        <img src='/img/footrank.svg' className={styles.logo} />
        <SearchRank onSubmit={handleSubmit} />
      </header>
      {standings ? <Standings title={competition} standings={standings} /> : <Tipbox />}
    </div >
  );
};

export default HomePage;
