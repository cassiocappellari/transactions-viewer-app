import { GetTransactionService } from "../services/GetTransactionService";

const transactionsResolvers = {
  Query: {
    getAllTransactions() {
      const transactions = GetTransactionService.getTransactions();

      return transactions;
    }
  }
};

export default transactionsResolvers;