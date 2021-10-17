import { Request, Response } from "express";
import fileReader from "../utils/fileReader";
import CreateTransactionService from "../services/CreateTransactionService";

class CreateTransactionController {

  async importTransactions(request: Request, response: Response) {
    const { file } = request;
    const { buffer } = file as any;

    const transactionsList = await fileReader(buffer);
    await CreateTransactionService.importTransactions(transactionsList);

    return response.status(201).json({ message: 'transactions successfully created' });
  };

}

export default CreateTransactionController;