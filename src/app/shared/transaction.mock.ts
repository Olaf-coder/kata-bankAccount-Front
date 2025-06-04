import {Transaction} from "../model/transaction.model";

export class TransactionsMockService {
    public static transactionGetAllMock : Transaction[] = [
        {
            id: 1,
            date: "2025-06-03",
            depositAmount: 50,

            withdrawAmount: 0,
            balance: 50
        },
        {
            id: 2,
            date: "2025-06-03",
            depositAmount: 0,
            withdrawAmount: 10,
            balance: 40
        },
        {
            id: 3,
            date: "2025-06-03",
            depositAmount: 1,
            withdrawAmount: 0,
            balance: 41
        },
        {
            id: 4,
            date: "2025-06-03",
            depositAmount: 0,
            withdrawAmount: 1,
            balance: 40
        }
    ]

    public static transactionToAdd  : Transaction = {
        depositAmount: 0,
        withdrawAmount: 50
    }

    public static transactionAddedMock : Transaction[] = [
        {
            id: 1,
            date: "2025-06-03",
            depositAmount: 50,
            withdrawAmount: 0,
            balance: 50
        },
        {
            id: 2,
            date: "2025-06-03",
            depositAmount: 0,
            withdrawAmount: 10,
            balance: 40
        },
        {
            id: 3,
            date: "2025-06-03",
            depositAmount: 1,
            withdrawAmount: 0,
            balance: 41
        },
        {
            id: 4,
            date: "2025-06-03",
            depositAmount: 0,
            withdrawAmount: 1,
            balance: 40
        },
        {
            id: 5,
            date: "2025-06-04",
            depositAmount: 0,
            withdrawAmount: 50,
            balance: -50
        }
    ]

}