import React from 'react';
import {Link, Route} from 'react-router-dom';
import styles from './Resume.module.scss';
import Skills from './Skills';
import Links from './Links';
import {hitInnerLink} from '../../util';

const Resume: React.FC = () => {
  return (
    <div className={styles.Resume} data-testid="Resume">
      <div className={styles.containerFluid}>
        <nav className={styles.sideNav}>
          <ul>
            <li onClick={hitInnerLink}>
              <Link to="/resume/skills"><h6>Summary and Skills</h6></Link>
            </li>
            <li onClick={hitInnerLink}>
              <Link to="/resume/links"><h6>Relevant Links</h6></Link>
            </li>
          </ul>
        </nav>

        <section className={styles.pageContent}>
          <Route path={["/resume", "/resume/skills"]} exact>
            <Skills/>
          </Route>
          <Route path="/resume/links">
            <Links/>
          </Route>
        </section>
      </div>
    </div>
  );
};

export default Resume;
