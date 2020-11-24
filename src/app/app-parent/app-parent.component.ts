import { Component, OnInit } from '@angular/core';
import {AccountInformation} from "../account-information";
import {AccountService} from "../account.service";

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.scss']
})
export class AppParentComponent implements OnInit {

  accountSelected: number;
  reference: string;
  currency: string;
  balance: number;
  accountInformation: AccountInformation[];

  constructor(private service: AccountService) { }

  ngOnInit(): void {
    this.accountInformation = this.service.getAccount();
  }


  acountChange(event) {
    this.accountSelected = event.target.value;
    this.reference = this.accountInformation[this.accountSelected].reference;
    this.currency = this.accountInformation[this.accountSelected].totals[0].currency;
    this.balance = this.accountInformation[this.accountSelected].totals[0].balance;
  }
}
