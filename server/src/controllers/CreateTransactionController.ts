import { Request, Response } from "express";
import { CreateTransactionService } from "../services/CreateTransactionService";
import { readFile } from "../utils/readFile";

class CreateTransactionController {

  async importTransactions(request: Request, response: Response) {
    const { file } = request;
    const { buffer } = file as any;

    const transactionsList = await readFile(buffer);
    const transactions = await CreateTransactionService.importTransactions(transactionsList);

    return response.status(201).json(transactions);
  };

}

export { CreateTransactionController };