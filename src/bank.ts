import Branch from "./branch";
import Customer from "./customer";

class Bank {
  #name: string;
  #branches: Branch[];

  constructor(name: string) {
    this.#name = name;
    this.#branches = new Array();
  }

  addBranch(branch: Branch): boolean {
    if (this.#branches.some((br) => br.getName === branch.getName)) {
      return false;
    }

    this.#branches.push(branch);
    return true;
  }

  addCustomer(branch: Branch, customer: Customer): boolean {
    const foundBranch = this.findBranchByName(branch.getName);
    if (!foundBranch) return false;

    return foundBranch[0].addCustomer(customer);
  }

  addCustomerTransaction(
    branch: Branch,
    customerId: string,
    transactionAmount: number
  ): boolean {
    const foundBranch = this.findBranchByName(branch.getName);
    if (!foundBranch) return false;

    return foundBranch[0].addCustomerTransaction(customerId, transactionAmount);
  }

  findBranchByName(branchName: string): Branch[] | null {
    const branches = this.#branches.filter(
      (branch) => branch.getName === branchName
    );

    if (branches.length === 0) return null;
    return branches;
  }

  checkBranch(branch: Branch): boolean {
    if (this.#branches.some((br) => br.getName === branch.getName)) return true;
    return false;
  }

  listCustomers(branch: Branch, withTransactions: boolean): boolean {
    const foundBranch = this.findBranchByName(branch.getName);
    if (!foundBranch) return false;

    const customers = foundBranch[0].getCustomers;

    customers.forEach((customer) => {
      console.log("Name: " + customer.getName);
      console.log("Id: " + customer.getId);

      if (withTransactions) {
        console.log(customer.getTransactions);
      }
    });

    return true;
  }
}

export default Bank;
