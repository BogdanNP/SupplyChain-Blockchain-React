import AddUserForm from "../components/AddUserForm";
import FindUserForm from "../components/FindUserForm";
import UserDetails from "../components/UserDetails";
import { userRoleFromString } from "../models/UserRoles";
import UsersContract from "../contracts/UsersContract";
import SupplyChainContract from "../contracts/SupplyChainContract";
import { React, useState, useEffect } from "react";

function CompaniesPage() {
  const _usersContract = new UsersContract();
  const _supplyChainContract = new SupplyChainContract();
  const [foundUser, setFoundUser] = useState();

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

  useEffect(() => {
    // loadBlockChainData();
  }, []);

  return (
    <div>
      {" "}
      <AddUserForm
        onSubmit={(e) => {
          addUser(e);
        }}
      />
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
