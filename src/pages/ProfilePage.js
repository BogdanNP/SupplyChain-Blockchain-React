import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import UserDetails from "../UserDetails";

function ProfilePage(props) {
  var _usersContract = new UsersContract();
  const [user, setUser] = useState();

  async function loadBlockChainData() {
    let _user = await _usersContract.getCurrentUser();
    setUser(_user);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);
  return (
    <div>
      {/* Profile Page */}
      <UserDetails user={user} />
    </div>
  );
}

export default ProfilePage;
