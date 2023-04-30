import Transaction from "./transaction";

class Customer {
  static #customerCount: number = 0;

  #id: string;
  #name: string;
  #transactions: Transaction[];

  constructor(name: string) {
    Customer.#customerCount++;

    this.#id = Customer.#customerCount.toString();
    this.#name = name;
    this.#transactions = new Array();
  }

  public get getName(): string {
    return this.#name;
  }

  public get getId(): string {
    return this.#id;
  }

  public get getTransactions(): Transaction[] {
    return this.#transactions;
  }

  getBalance(): number {
    let balance = 0;

    this.#transactions.forEach((transaction) => {
      balance += transaction.amount;
    });
    return balance;
  }

  addTransaction(transactionAmount: number): boolean {
    if (this.getBalance() + transactionAmount < 0) return false;

    const transaction: Transaction = {
      amount: transactionAmount,
      date: new Date(Date.now()),
    };

    this.#transactions.push(transaction);
    return true;
  }
}

export default Customer;
