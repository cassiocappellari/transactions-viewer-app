import client from "../database/client";

class GetTransactionService {

  static async getTransactions() {
    const transactions = await client.transactions.findMany();

    return transactions;
  };

  static async getTransactionsByDateRange(startMonth: string, endMonth: string) {
    const transactions = await client.transactions.findMany({
      where: {
        createdAt: {
          gte: startMonth,
          lte: endMonth
        }
      }
    });

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

export default GetTransactionService;