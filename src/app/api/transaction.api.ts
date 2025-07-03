import {inject, Injectable} from '@angular/core';
import {Transaction} from "../model/transaction.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransactionApi {
  readonly http = inject(HttpClient);
  readonly baseEndpoint = "api/v1.0/transactions/"
  readonly depositEndpoint = this.baseEndpoint + "deposits/"
  readonly withdrawEndpoint = this.baseEndpoint + "withdrawals/"

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseEndpoint);
  }

  addTransaction(transactionToAdd: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseEndpoint}`, transactionToAdd);
  }

  addDeposit(depositAmount: number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.depositEndpoint}`, depositAmount);
  }

  addWithdraw(withdrawAmount: number): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.withdrawEndpoint}`, withdrawAmount);
  }

}
