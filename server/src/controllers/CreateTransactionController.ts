import { Request, Response } from "express";
import fileReader from "../utils/fileReader";
import CreateTransactionService from "../services/CreateTransactionService";

class CreateTransactionController {

  async importTransactions(request: Request, response: Response) { 
    try {
      const { file } = request;
      const { buffer } = file as any;

      const transactionsList = await fileReader(buffer);
      await CreateTransactionService.importTransactions(transactionsList);
  
      return response.status(201).send({ message: "transactions successfully created" });
    } catch(error) {
      return response.status(500).send({ message: "internal server error" })
    }
  };

}

export default CreateTransactionController;