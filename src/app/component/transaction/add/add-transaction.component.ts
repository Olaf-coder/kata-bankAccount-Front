import {Component, output} from '@angular/core';
import {TransactionApi} from "../../../service/transaction.api";
import {Transaction} from "../../../model/transaction.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-transaction',
  imports: [
    FormsModule
  ],
  templateUrl: './add-transaction.component.html',
  styleUrl: './add-transaction.component.scss'
})
export class AddTransactionComponent {

  readonly notify = output<void>();

  errorMessageWithdraw?: string;
  amountWithdraw?: number ;
  amountDeposit?: number ;

  constructor(private transactionApiService: TransactionApi) {
  }

  sendWithdraw() {
    console.log(`amountWithdraw to send: ${this.amountWithdraw}`)
    if(this.amountWithdraw && this.amountWithdraw > 0) {
      const transaction: Transaction = {
        depositAmount: 0,
        withdrawAmount: this.amountWithdraw
      }
      this.createTransaction(transaction);
    } else {
      this.errorMessageWithdraw = "Erreur, Montant inexistant ou non positif"
    }
  }

  createTransaction(transaction:Transaction) {
    this.transactionApiService.addTransaction(transaction).subscribe({
      next:(response) => {
        console.log(`transaction enregistré: ${response}`)
        this.notify.emit()

        this.errorMessageWithdraw = undefined;
        this.cleanFormAdd();
      },
      error:(error) => {
        const errorToPrint = `Désolé, une erreur a été remonté durant l'envoie de la transaction': ${error.status}, ${error.statusText} `
        console.error(errorToPrint);
        this.errorMessageWithdraw = errorToPrint;
      }
    })
  }

  cleanFormAdd() {
    this.amountWithdraw = undefined;
    this.amountDeposit = undefined;
  }
}
