import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUpdated = new Subject<void>();
  transactionUpdated$ = this.transactionUpdated.asObservable();

  notifyTransactionUpdate() {
    this.transactionUpdated.next();
  }
}
