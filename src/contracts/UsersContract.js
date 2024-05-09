import { CONTRACT_ABI_USERS, CONTRACT_ADDRESS_USERS } from "../config";

import { ethers } from "ethers";
import { decodeError } from "ethers-decode-error";

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
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const user = this.usersContract.users(accounts[0]);
      return user;
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }

  async getUsersCount() {
    try {
      const count = await this.usersContract.usersCount();
      return count;
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      alert(contractError.error);
    }
  }
}

export default UsersContract;
