import { CONTRACT_ABI_USERS, CONTRACT_ADDRESS_USERS } from "../config";

import { ethers } from "ethers";

class UsersContract {
  constructor() {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    this.usersContract = new ethers.Contract(
      CONTRACT_ADDRESS_USERS,
      CONTRACT_ABI_USERS,
      _provider.getSigner(0)
    );
  }

  async getCurrentUser() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const user = this.usersContract.users(accounts[0]);
    return user;
  }

  async getUsersCount() {
    const count = await this.usersContract.usersCount();
    return count;
  }
}

export default UsersContract;
