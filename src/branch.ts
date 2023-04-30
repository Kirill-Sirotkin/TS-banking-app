import Customer from "./customer";

class Branch {
  #name: string;
  #customers: Customer[];

  constructor(name: string) {
    this.#name = name;
    this.#customers = new Array();
  }

  public get getName(): string {
    return this.#name;
  }

  public get getCustomers(): Customer[] {
    return this.#customers;
  }

  addCustomer(customer: Customer): boolean {
    if (this.#customers.some((cust) => cust.getId === customer.getId))
      return false;

    this.#customers.push(customer);
    return true;
  }

  addCustomerTransaction(
    customerId: string,
    transactionAmount: number
  ): boolean {
    const customer = this.findCustomer(customerId);

    if (!customer) return false;
    return customer.addTransaction(transactionAmount);
  }

  findCustomer(customerId: string): Customer | null {
    const customer = this.#customers.find((cust) => cust.getId === customerId);

    if (!customer) return null;
    return customer;
  }
}

export default Branch;
