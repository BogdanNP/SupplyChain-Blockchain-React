import { useState, useEffect } from "react";
import UsersContract from "../contracts/UsersContract";
import UserDetails from "../components/UserDetails";
import { useNavigate } from "react-router-dom";

function ProfilePage(props) {
  const _usersContract = new UsersContract();
  const [user, setUser] = useState();

  const navigate = useNavigate();

  async function loadBlockChainData() {
    let _user = await _usersContract.getCurrentUser();
    if (_user === undefined) {
      navigate("/connect");
    }
    setUser(_user);
  }

  useEffect(() => {
    loadBlockChainData();
  }, []);
  return (
    <div>
      <p>Pagina de profil, aici sunt afisate detaliile contului</p>
      <UserDetails user={user} />
    </div>
  );
}

export default ProfilePage;
