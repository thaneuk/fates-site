import React, {useEffect, useState} from 'react';
import styles from './GOL.module.scss';
import Grid from './Grid-class';
import {MemoCell} from './Cell';


const GOL: React.FC = () => {
  const x = 80, y = 80;
  const [cycles, setCycles] = useState(0);
  const [continuous, setContinuous] = useState(false);
  const [grid] = useState((): Grid => (new Grid(80, 80)));


  useEffect(() => {
    return () => {
      grid.end();
    }
  }, [grid]);

  useEffect(() => {
  }, [cycles, continuous]);

  const runCycle = () => {
    grid.cycleGridToNextState();
    setCycles(grid.cyclesRun || 0);
  }

  const runCycles = () => {
    grid.toggleCycling(setCycles);
    setContinuous(grid.runContinuously || false);
  }

  const randomizeCells = () => {
    if (!grid.runContinuously) {
      grid.randomizeCells(setCycles);
    }
  }

  const gridRend = () => {
    return grid.getGridState().map((row: boolean[], ix: number) => {
      return row.map((cellState: boolean, iy: number) => (<MemoCell key={`${ix},${iy}`} cellState={cellState}/>));
    });
  }


  return (
    <div className={styles.GOL} data-testid="GOL">

      <h3>Game of life</h3>
      <p>I wrote a JavaScript version of the Game of Life as I couldn't find it anywhere else.</p>

      <div className={styles.grid} style={{width: x * 4, height: y * 4}}>
        {gridRend()}
      </div>

      <h5>Cycles: {cycles}</h5>

      <div className="btn-group" role="group" aria-label="Controls">
        <button onClick={runCycle} className="btn btn-secondary">Single Cycle</button>
        <button onClick={runCycles}
                className="btn btn-secondary">{`${grid.runContinuously ? 'Stop' : 'Start'}`}</button>
        <button onClick={randomizeCells} disabled={grid.runContinuously || cycles === 0}
                className="btn btn-secondary">Randomize cells
        </button>
      </div>
    </div>
  );
}

export default GOL;
