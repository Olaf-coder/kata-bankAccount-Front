import { Component } from '@angular/core';
import {AddTransactionComponent} from "./add/add-transaction.component";

@Component({
  selector: 'app-transaction',
    imports: [
        AddTransactionComponent
    ],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {

}
