import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const isActive = (path: string): string => (String(pathname).startsWith(path) ? `${styles.active}` : '');

  return (
    <header className={styles.Header} data-testid="Header">
      <div className="row align-items-center">
        <div className="col">
          <nav className="row">
            <div className="col-auto">
              <NavLink to="/home" className={isActive('/home')}>
                <span className={styles.homeIcon} title="Home" />
                <span className="d-none d-md-inline">Home</span>
              </NavLink>
            </div>

            <div className="col-auto">
              <NavLink to="/code" className={isActive('/code')}>
                <span className={styles.codeIcon} title="Code" />
                <span className="d-none d-md-inline">JS Code</span>
              </NavLink>
            </div>

            <div className="col-auto">
              <NavLink to="/resume" className={isActive('/resume')}>
                <span className={styles.resumeIcon} title="Resum&eacute;" />
                <span className="d-none d-md-inline">Resum&eacute;</span>
              </NavLink>
            </div>
          </nav>
        </div>

        <div className={`col-auto ${styles.name}`}>
          <h1>Gregory Jackson</h1>
          <small>Lead Software Engineer</small>
        </div>
      </div>
    </header>
  );
};

export default Header;
