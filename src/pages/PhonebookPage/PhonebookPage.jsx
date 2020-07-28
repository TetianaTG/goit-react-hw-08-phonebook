import React from "react";
import Phonebook from "../../components/phonebook/Phonebook";
import ContactList from "../../components/contactList/ContactList";
import UserMenu from "../../components/UserMenu/UserMenu";

const UserPage = () => {
  return (
    <>
      <Phonebook />
      <ContactList />
      <UserMenu />
    </>
  );
};

export default UserPage;
