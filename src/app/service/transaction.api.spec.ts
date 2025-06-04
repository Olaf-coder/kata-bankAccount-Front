import { TestBed } from '@angular/core/testing';

import { TransactionApi } from './transaction.api';
import {HttpTestingController, provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";
import {Transaction} from "../model/transaction.model";
import {TransactionsMockService} from "../shared/transaction.mock";

describe('TransactionApiService', () => {
  let service: TransactionApi;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
          TransactionApi,
          provideHttpClient(),
          provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(TransactionApi);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should getTransactions() call GET method on transaction API', () => {
    //given
    const transactionsMock : Transaction[] = TransactionsMockService.transactionGetAllMock;

    //when
    // then
    service.getTransactions().subscribe(transactions => {
      expect(transactions).toEqual(transactionsMock)
      expect(transactions.length).toEqual(4)
    });

    const req = httpMock.expectOne('api/v1.0/transactions/')
    expect(req.request.method).toEqual('GET');
    req.flush(transactionsMock)
  });

  it('should addTransaction() call POST method on transaction API with Transaction in body', () => {
    //given
    const transactionToAdd : Transaction = TransactionsMockService.transactionToAdd;
    const expectedAddedTransaction = {...transactionToAdd, id: 5};

    //when
    // then
    service.addTransaction(transactionToAdd).subscribe(transaction => {
      expect(transaction).toEqual(expectedAddedTransaction)
      expect(transaction.id).toBeDefined();
      expect(transaction.date).toEqual(expectedAddedTransaction.date);
      expect(transaction.depositAmount).toEqual(expectedAddedTransaction.depositAmount);
      expect(transaction.withdrawAmount).toEqual(expectedAddedTransaction.withdrawAmount);
      expect(transaction.balance).toEqual(expectedAddedTransaction.balance);
    });

    const req = httpMock.expectOne('api/v1.0/transactions/');

    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(transactionToAdd);
    req.flush(expectedAddedTransaction);
  });
});
