let nextId = 0;

export class Totals {
  id: number;
  constructor (
    public currency: string,
    public balance: number,
    public toEurRate: number) {
      this.id = nextId++;
    }
}
