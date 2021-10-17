import { client } from "../database/client";

class GetTransactionService {

  static async getTransactions() {
    const transactions = await client.transactions.findMany();

    return transactions;
  };

  static async getTransactionById(transactionId: string) {
    const transaction = await client.transactions.findUnique({
      where: {
        id: transactionId
      }
    });

    return transaction;
  }

};

export { GetTransactionService };