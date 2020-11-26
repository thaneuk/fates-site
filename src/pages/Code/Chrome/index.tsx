import React from 'react';
import styles from './Chrome.module.scss';

const Chrome: React.FC = () => {
  return (
    <div className={styles.Chrome} data-testid="Chrome">
      <h3>Cricket Wireless Mock flow extension</h3>
      <p>Using AngularJS for presentation and accessing https://www.mockable.io/ for data.</p>
      <p><a href="https://chrome.google.com/webstore/detail/cw-mock-flows/phemccdalbffjonikjdokficpeoekfii?hl=en-GB"
            target="_blank" rel="noopener noreferrer">Link</a></p>
      <h3>Code Cloud pull-request notification extension</h3>
      <p>Using Chrome ES2015 functionality, an extension to periodicly page a server to notify the user if there are
        pull-requests to review.</p>
      <p><a
        href="https://chrome.google.com/webstore/detail/codecloud-pulls-chrome-ex/dbdojiediklblipiobajjakijmijoeaa?hl=en-GB"
        target="_blank" rel="noopener noreferrer">Link</a></p>
    </div>
  );
}

export default Chrome;
