import React from 'react';
import styles from './Adobe.module.scss';

const Adobe: React.FC = () => {
  return (
    <div className={styles.Adobe} data-testid="Adobe">
      <h3> A <a href="https://github.com/adobe/brackets" target="_blank" rel="noopener noreferrer">Brackets</a> Extension for insertion of Special
        HTML Characters</h3>
      <p>The Inline editing context menu will get an additional option to bring up a menu of common Special HTML
        characters to insert of the cursors position (e.g. Copyright, Trademark,
        Non-breaking space).</p>
      <p>A more option at the bottom of this menu brings up a dialog which has an extensive list of these characters for
        you to choose from.</p>
      <p>In addition 'Alt-C' will bring up the full dialog to select a character to be inserted at the cursor
        position.</p>
      <p><a href="https://github.com/thaneuk/brackets-special-html-chars"
            target="_blank" rel="noopener noreferrer">https://github.com/thaneuk/brackets-special-html-chars</a></p>
    </div>
  );
}

export default Adobe;
