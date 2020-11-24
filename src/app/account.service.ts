import { Injectable } from '@angular/core';
import {AccountInformation} from "./account-information";
import {BackendService} from "./backend.service";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private accountInformation: AccountInformation[] = [];

  constructor(private backend: BackendService) { }

  getAccount() {
    this.backend.getAll(AccountInformation).then( (accountInformation: AccountInformation[]) => {
      this.accountInformation.push(...accountInformation); // fill cache
    });
    return this.accountInformation;
  }
}
