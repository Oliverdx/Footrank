import React from 'react';

import styles from './tipbox.module.scss';

const Tipbox = (): JSX.Element => {
  return (
    <div className={styles.tipbox_wrapper}>
      <h2>What's Up, Doc?</h2>
      <p>This is a simple SPA (Single Page Application) who show standings
      of some championships around the world using the <a href="https://www.football-data.org/">FootBall Data API</a></p>
      <h3>How I use that ?</h3>
      <p>Simple, you just type an ID of a championship in the search box
      up here like '2013' and you will receive the standings of each team,
        in this case you will receive the Brazilian Serie A.</p>
      <p>In this SPA we are using only the free tier of the API so,
        some championships won't be available and you will receive and alert</p>
    </div>)
}

export default Tipbox;

{/* <p>The ID's available are: </p>
<ul>
  <li>2000</li>
  <li>2001</li>
  <li>2013</li>
  <li>2016</li>
  <li>2021</li>
  <li>2018</li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul> */}