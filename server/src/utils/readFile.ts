import { Readable } from "stream";
import readline from "readline";

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

const readFile = async (fileBuffer: string) => {
  const readableFile = new Readable();
  readableFile.push(fileBuffer);
  readableFile.push(null);

  const transactionsLine = readline.createInterface({
    input: readableFile
  });

  const transactions: Transaction[] = [];

  for await (let line of transactionsLine) {
    const transactionLineSplit = line.split(",");

    transactions.push({
      id: transactionLineSplit[0],
      account: transactionLineSplit[1],
      description: transactionLineSplit[2],
      category: transactionLineSplit[3],
      reference: transactionLineSplit[4],
      currency: transactionLineSplit[5],
      amount: Number(transactionLineSplit[6]),
      status: transactionLineSplit[7],
      transactionDate: new Date(transactionLineSplit[8]),
      createdAt: new Date(transactionLineSplit[9]),
      updatedAt: new Date(transactionLineSplit[10]),
    });
  };

  return transactions;
};

export { readFile };