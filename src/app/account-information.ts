import {Totals} from "./totals";

let nextId = 0;

export class AccountInformation {
  id: number;
  constructor (
    public reference: string,
    public displayName: string,
    public totals: Totals[]) {
    this.id = nextId++;
  }
}
