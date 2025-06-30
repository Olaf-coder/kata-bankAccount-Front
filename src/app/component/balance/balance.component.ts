import {Component, OnInit} from '@angular/core';
import {Balance} from "../../model/balance.model";
import {BalanceApi} from "../../service/balance.api";
import {DatePipe, DecimalPipe} from "@angular/common";
import {PipeHideZero} from "../../shared/PipesCustom/pipe-hide-zero";

@Component({
  selector: 'app-balance',
  imports: [
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent implements OnInit {

  errorMessageGet? : string;
  balance: Balance;

  constructor(private readonly balanceApi: BalanceApi) {
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.balanceApi.getBalance().subscribe({
      next:(response) => {
        this.balance = response;
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la récuperation: ${error.status}, ${error.statusText}`
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
        this.errorMessageGet = errorToPrint;
      }
    })
  }

}
