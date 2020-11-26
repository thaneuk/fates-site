export default class Cell {
  private alive!: boolean;
  private aliveNextState = false;
  private neighbours: Cell[] = [];

  constructor() {
    this.setRandomState();
  }

  public setRandomState() {
    this.alive = Math.random() > 0.6;
  }

  private setState(state: boolean) {
    this.alive = state;
  }

  public getState(): boolean {
    return this.alive;
  }

  public addNeighbour(neighbour: Cell) {
    this.neighbours.push(neighbour);
  }

  public getNextState() {
    const neighbourAliveCount = this.neighbours.reduce((neighbourAliveCount, neighbour) =>
      neighbourAliveCount += neighbour.getState() ? 1 : 0, 0);

    if (this.alive && (neighbourAliveCount < 2 || neighbourAliveCount > 3)) {
      this.aliveNextState = false;
    } else if (!this.alive && neighbourAliveCount === 3) {
      this.aliveNextState = true;
    }
  }

  public moveToNextState() {
    this.alive = this.aliveNextState;
  }
}
