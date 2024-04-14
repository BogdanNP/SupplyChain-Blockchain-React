import {
  CONTRACT_ABI_OBJECT_TRANSFERS,
  CONTRACT_ADDRESS_OBJECT_TRANSFERS,
} from "../config";

import { ethers } from "ethers";

class ObjectTransfersContract {
  constructor() {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    this.objectTransfersContract = new ethers.Contract(
      CONTRACT_ADDRESS_OBJECT_TRANSFERS,
      CONTRACT_ABI_OBJECT_TRANSFERS,
      _provider.getSigner(0)
    );
  }
}

export default ObjectTransfersContract;
