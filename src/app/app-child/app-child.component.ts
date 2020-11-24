import {Component, Input, OnInit, Output} from '@angular/core';
import {AccountInformation} from "../account-information";
import {AccountService} from "../account.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventEmitter} from "events";

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss']
})
export class AppChildComponent implements OnInit {
  @Input('accountInformation') accountInformation: string;
  @Output() selected = new EventEmitter<string>();

  accountForm: FormGroup;


  constructor(private service: AccountService) { }

  ngOnInit() {
    this.accountForm = new FormGroup({
      displayName: new FormControl(this.accountInformation)
    });
  }

  selectAccount(account: string) {
    this.selected.emit(account);
  }

  get displayName() { return this.accountForm.get('displayName'); }
}
