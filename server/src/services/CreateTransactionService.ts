import { client } from "../database/client";

type Transaction = {
  id: string;
  account?: string;
  description?: string;
  category?: string;
  reference?: string;
  currency?: string;
  amount?: number;
  status?: string;
  transactionDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};

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

export { CreateTransactionService };