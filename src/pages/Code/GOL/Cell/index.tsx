import React, {PropsWithChildren} from 'react';
import styles from './Cell.module.scss';


interface MyProps {
  cellState: boolean
}


const Cell: React.FC<PropsWithChildren<MyProps>> = (props: MyProps) => {
  return (
    <div className={`${props.cellState ? `${styles.alive}` : `${styles.dead}`}`}/>
  )
}


export const MemoCell = React.memo(Cell);
