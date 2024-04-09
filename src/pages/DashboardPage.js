import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";

function DashboardPage() {
  const _usersContract = new UsersContract();
  const [usersCount, setUsersCount] = useState(0);
  useEffect(() => {
    loadBlockChainData();
  }, []);
  async function loadBlockChainData() {
    const _usersCount = await _usersContract.getUsersCount();
    setUsersCount(_usersCount);
  }

  return (
    <div>
      Dashboard Page, here we should display events from all contracts
      <p> {"Contract users: " + usersCount}</p>
    </div>
  );
}

export default DashboardPage;
