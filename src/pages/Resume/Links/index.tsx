import React from 'react';
import styles from './Links.module.scss';

const Links: React.FC = () => {
  return (
    <div className={styles.Links} data-testid="Links">
      <h3>Relevant Links</h3>
      <ul>
        <li><a href="https://github.com/thaneuk">Github page</a></li>
        <li><a href="https://stackoverflow.com/users/1206418/ggj">Stackoverflow profile</a></li>
        <li><a href="https://www.linkedin.com/in/gregorygjackson/">LinkedIn</a></li>
      </ul>
    </div>
  );
}

export default Links;
