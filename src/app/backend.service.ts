import {Injectable, Type} from '@angular/core';
import {AccountInformation} from "./account-information";
import {Totals} from "./totals";

const ACCOUNT_INFO = [
  new AccountInformation("user1@invoicefair.com", "Test user 1", [new Totals("EUR", 32500.2234, 1), new Totals("GBP", 88300.1842, 1.17)]),
  new AccountInformation("user2@invoicefair.com", "Test user 2", [new Totals("EUR", 54403.7169, 1), new Totals("GBP", 120.1533, 0.89)])
];


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() {}

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === AccountInformation) {
      // TODO: get from the database
      return Promise.resolve<AccountInformation[]>(ACCOUNT_INFO);
    }
    throw new Error('Cannot get object of this type');
  }
}
