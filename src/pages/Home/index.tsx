import React from 'react';
import styles from './Home.module.scss';
import gyzz from './images/gyzz.png';
import ricoh from './images/ricoh.png';
import screen from './images/screen.png';
import geno from './images/geno.png';

const Home: React.FC = () => {
  return (
    <div className={styles.Home} data-testid="Home">
      <div className={styles.containerFluid}>
        <h3>About me:</h3>
        <p>In October 2013, I moved to Georgia US.</p>
        <p>
          I have been doing full stack development for many years. I get most enjoyment out of JavaScript (ECMAScript)
          and HTML/CSS.
        </p>
        <p>
          I've also put together a few forum signatures in Adobe Photoshop for myself and friends. Some examples below.
        </p>
        <ul className={styles.forumSignatures}>
          <li>
            <img src={gyzz} alt="Gyzz" />
          </li>
          <li>
            <img src={ricoh} alt="Ricoh" />
          </li>
          <li>
            <img src={screen} alt="Screenager" />
          </li>
          <li>
            <img src={geno} alt="Genophix" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
