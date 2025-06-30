import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Balance} from "../model/balance.model";

@Injectable({
  providedIn: 'root'
})
export class BalanceApi {
  readonly http = inject(HttpClient);
  readonly baseEndpoint = "api/v1.0/balances/"

  getBalance(): Observable<Balance> {
    return this.http.get<Balance>(this.baseEndpoint);
  }

}
