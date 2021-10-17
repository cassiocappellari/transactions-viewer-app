import { GetTransactionService } from "../services/GetTransactionService";

const transactionsResolvers = {
  Query: {
    getAllTransactions() {
      const transactions = GetTransactionService.getTransactions();

      return transactions;
    },
    getTransactionById(_, { id }) {
      const transaction = GetTransactionService.getTransactionById(id);

      return transaction;
    }
  }
};

export default transactionsResolvers;