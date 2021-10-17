import client from "../database/client";
import { Transaction } from "../types/transaction";

class CreateTransactionService {

  static async importTransactions(transactions: Transaction[]) {
    for await (let {
      id,
      account,
      description,
      category,
      reference,
      currency,
      amount,
      status,
      transactionDate,
      createdAt,
      updatedAt,
    } of transactions) {
      await client.transactions.create({
        data: {
          id,
          account,
          description,
          category,
          reference,
          currency,
          amount,
          status,
          transactionDate,
          createdAt,
          updatedAt,
        }
      });
    };

    return transactions;
  };

}

export default CreateTransactionService;