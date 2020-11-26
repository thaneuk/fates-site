import React from 'react';
import styles from './Skills.module.scss';
import skillList from './skill-list.json';

const Skills: React.FC = () => {

  const skills = () => (
    <ul>{skillList.map((skill: string) => (<li key={skill} className={styles.skills}>{skill}</li>))}</ul>
  );

  return (
    <div className={styles.Skills} data-testid="Skills">
      <h3>Current Role</h3>
      <h4>Lead Software Engineer at The Home Depot</h4>
      <p>An experienced developer with many years in a myriad of technical roles, defining and maintaining standards in
        Agile development environments.</p>
      <p>Leading and mentoring Upstream visibility development teams; in the development and maintenance of Logistics
        Visibility tools. Developed for optimizing logistics within the Home Depot supply chain. Using Angular / React / NodeJS / Java / MongoDB / MSSQL / Oracle / MySQL.</p>
      <h3>Skills</h3>
      {skills()}
    </div>
  );
}

export default Skills;
