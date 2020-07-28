import React from "react";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/authOperations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authOperations.logoutOperation());
  };

  return (
    <button
      type="button"
      onClick={onLogout}
      style={{
        marginLeft: "30px",
        marginBottom: "15px",
        backgroundColor: "red",
        color: "white",
        fontWeight: "bold",
        border: "none",
        letterSpacing: "0.5px",
        height: "35px",
        width: "100px",
      }}
    >
      Logout
    </button>
  );
};

export default UserMenu;
