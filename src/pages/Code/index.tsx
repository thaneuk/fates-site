import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Code.module.scss';
import bracketsIcon from './images/brackets-icon.svg';
import Chrome from './Chrome';
import Adobe from './Adobe';
import {hitInnerLink} from '../../util';
import GOL from './GOL';

const Code: React.FC = () => {
  return (
    <div className={styles.Code} data-testid="Code">
      <div className={styles.containerFluid}>
        <nav className={styles.sideNav}>
          <ul>
            <li onClick={hitInnerLink}>
              <Link to="/code/gol">
                <h6>Game of life</h6>
                <p>A cellular automaton devised by the British mathematician John Horton Conway in 1970.</p>
              </Link>
            </li>
            <li onClick={hitInnerLink}>
              <Link to="/code/chrome">
                <h6>Chrome Extensions</h6>
              </Link>
            </li>
            <li onClick={hitInnerLink}>
              <Link to="/code/brackets">
                <h6><img src={bracketsIcon} alt="Brackets Icon" /> Adobe Brackets Extension</h6>
                <p>Special Html Characters</p>
              </Link>
            </li>
          </ul>
        </nav>

        <section className={styles.pageContent}>
          <Route path={["/code", "/code/gol"]} exact>
            <GOL />
          </Route>
          <Route path="/code/chrome">
            <Chrome />
          </Route>
          <Route path="/code/brackets">
            <Adobe />
          </Route>
        </section>
      </div>
    </div>
  );
};

export default Code;
