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
      return this.getUser(accounts[0]);
    } catch (error) {
      // console.log(error);
      const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getUser(address) {
    try {
      const user = await this.usersContract.get(address);
      return user;
    } catch (error) {
      console.log(error);
      const contractError = decodeError(error);
      // alert(contractError);
    }
  }

  async getUserList() {
    try {
      const currentUser = await this.getCurrentUser();
      const count = await this.usersContract.usersCount();

      let userList = [];
      for (let i = 0; i < count; ++i) {
        const userAddress = await this.usersContract.usersByIndex(i);
        if (userAddress !== currentUser.id) {
          const user = await this.getUser(userAddress);
          userList.push(user);
        }
      }
      return userList;
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async getUsersCount() {
    try {
      const count = await this.usersContract.usersCount();
      return count;
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }

  async register(user) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let userDetails = user;
      userDetails.id = accounts[0];
      await this.usersContract._register(userDetails, accounts[0]);
    } catch (error) {
      console.error(error);
      const contractError = decodeError(error);
      // alert(contractError.error);
    }
  }
}

export default UsersContract;
