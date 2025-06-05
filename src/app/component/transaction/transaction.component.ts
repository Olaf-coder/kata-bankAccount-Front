import {Component, OnInit} from '@angular/core';
import {Transaction} from "../../model/transaction.model";
import {TransactionApi} from "../../service/transaction.api";
import {AddTransactionComponent} from "./add/add-transaction.component";
import {DatePipe, DecimalPipe} from "@angular/common";
import {PipeHideZero} from "../../shared/PipesCustom/pipe-hide-zero";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  imports: [
    AddTransactionComponent,
    DecimalPipe,
    PipeHideZero,
    DatePipe
  ],
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent implements OnInit{

  errorMessageGet? : string;
  transactions: Transaction[] = [];

  constructor(private readonly transactionApi: TransactionApi) {
  }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.transactionApi.getTransactions().subscribe({
      next:(response) => {
        this.transactions = response;
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant la récuperation: ${error.status}, ${error.statusText}`
        console.error('Désolé, une erreur a été remonté durant la récuperation', error);
        this.errorMessageGet = errorToPrint;
      }
    })
  }

  printPage() {
    window.print();
  }

}
