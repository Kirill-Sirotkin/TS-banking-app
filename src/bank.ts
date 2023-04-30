import Branch from "./branch";

class Bank {
  #name: string;
  #branches: Branch[];

  constructor(name: string) {
    this.#name = name;
    this.#branches = new Array();
  }
}

export default Bank;
