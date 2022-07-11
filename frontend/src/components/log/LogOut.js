import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BiLogIn } from 'react-icons/bi';

function Logout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <button onClick={logout} className=" btn-logout" aria-label="Déconnexion">
        <BiLogIn
          className=" btn-logout__icon-logout"
          aria-label="Déconnexion"
        />
      </button>
    </>
  );
}
export default Logout;
