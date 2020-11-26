import Cell from './Cell-class';

export default class Grid {
  private readonly grid: Cell[][];
  private readonly x: number;
  private readonly y: number;
  private cycleCount = 0;
  private _runContinuously = false;
  /* precaution against a cycle trying to call state functions during dismount */
  private unmounted = false;

  constructor(x: number, y: number) {
    if (!(x > 0 && y > 0)) {
      throw new Error('Grid: X and Y must be positive');
    }

    this.x = x;
    this.y = y;
    this.grid = [];

    for (let i = 0; i < this.x; i += 1) {
      const newRow = [];
      for (let j = 0; j < this.y; j += 1) {
        newRow.push(new Cell());
      }
      this.grid.push(newRow);
    }

    this.assignNeighbours();
  }

  private assignNeighbours() {
    for (let i = 0; i < this.x; i += 1) {
      for (let j = 0; j < this.y; j += 1) {
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i - 1, this.x)][Grid.mod(j - 1, this.y)]);
        this.grid[i][j].addNeighbour(this.grid[i][Grid.mod(j - 1, this.x)]);
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i + 1, this.x)][Grid.mod(j - 1, this.y)]);
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i - 1, this.x)][j]);
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i + 1, this.x)][j]);
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i - 1, this.x)][Grid.mod(j + 1, this.y)]);
        this.grid[i][j].addNeighbour(this.grid[i][Grid.mod(j + 1, this.x)]);
        this.grid[i][j].addNeighbour(this.grid[Grid.mod(i + 1, this.x)][Grid.mod(j + 1, this.y)]);
      }
    }
  }

  private static mod(i: number, m: number): number {
    return i < 0 ? m + i : i % m;
  }

  public getGridState(): boolean[][] {
    const state = [];
    for (let i = 0; i < this.x; i += 1) {
      const row = [];
      for (let j = 0; j < this.y; j += 1) {
        row.push(this.grid[i][j].getState());
      }
      state.push(row);
    }
    return state;
  }

  public cycleGridToNextState() {
    for (let i = 0; i < this.x; i += 1) {
      for (let j = 0; j < this.y; j += 1) {
        this.grid[i][j].getNextState();
      }
    }

    for (let i = 0; i < this.x; i += 1) {
      for (let j = 0; j < this.y; j += 1) {
        this.grid[i][j].moveToNextState();
      }
    }

    this.cycleCount += 1;
  }

  public toggleCycling(setCycles: Function) {
    this._runContinuously = !this._runContinuously;
    if (this._runContinuously) {
      if (!this.unmounted) {
        this.cycling(setCycles);
      }
    }
  }

  private cycling(setCycles: Function) {
    if (this._runContinuously) {
      setTimeout(() => {
        this.cycleGridToNextState();
        if (this._runContinuously) {
          this.cycling(setCycles);
        }
        if (!this.unmounted) {
          setCycles(this.cyclesRun);
        }
      }, 0);
    }
  }

  public randomizeCells(setCycles: Function) {
    if (!this._runContinuously) {
      for (let i = 0; i < this.x; i += 1) {
        for (let j = 0; j < this.y; j += 1) {
          this.grid[i][j].setRandomState();
        }
      }

      this.cycleCount = 0;
      if (!this.unmounted) {
        setCycles(0);
      }
    }
  }

  public get cyclesRun(): number {
    return this.cycleCount;
  }

  public end() {
    this._runContinuously = false;
    this.unmounted = true;
  }

  public get runContinuously(): boolean {
    return this._runContinuously;
  }
}
