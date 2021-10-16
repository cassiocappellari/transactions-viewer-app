import { Request, Response } from "express";
import { readFile } from "../utils/readFile";

class CreateTransactionController {

  async importTransactions(request: Request, response: Response) {
    const { file } = request;
    const { buffer } = file as any;

    const transactionsList = await readFile(buffer);

    return response.send();
  };
}

export { CreateTransactionController };