import AddUserForm from "../components/AddUserForm";
import FindUserForm from "../components/FindUserForm";
import UserDetails from "../components/UserDetails";
import { userRoleFromString, UserRoles } from "../models/UserRoles";
import UsersContract from "../contracts/UsersContract";
import SupplyChainContract from "../contracts/SupplyChainContract";
import { React, useState, useEffect } from "react";

function CompaniesPage() {
  const _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();
  const [foundUser, setFoundUser] = useState();
  const [user, setUser] = useState(undefined);

  async function addUser(userDetails) {
    // console.log(userDetails);
    const newUser = {
      id: userDetails["address"],
      name: userDetails["name"],
      email: userDetails["email"],
      role: userRoleFromString(userDetails["role"]),
    };
    await _supplyChainContract.addUser(newUser);
  }

  async function findUser(userAddress) {
    const _address = userAddress["address"];
    const _foundUser = await _usersContract.getUser(_address);
    setFoundUser(_foundUser);
  }

  let foundUserDetails;
  if (foundUser !== undefined) {
    foundUserDetails = <UserDetails user={foundUser} />;
  }

  async function loadBlockChainData() {
    let _user;
    _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      setUser(undefined);
    } else {
      setUser(_user);
    }
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);

  let addUserForm;
  if (user !== undefined) {
    if (user.role == UserRoles.Admin) {
      addUserForm = (
        <AddUserForm
          onSubmit={(e) => {
            addUser(e);
          }}
        />
      );
    }
  }

  return (
    <div>
      {addUserForm}
      <FindUserForm
        onSubmit={(e) => {
          findUser(e);
        }}
      />
      {foundUserDetails}
    </div>
  );
}

export default CompaniesPage;
