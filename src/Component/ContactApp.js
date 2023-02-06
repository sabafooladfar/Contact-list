import ContactList from "./ContactList";
import Header from "./Header";
import NewContactForm from "./NewContactForm";
import { useState } from "react";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (input) => {
    const newContact = {
      id: Math.floor(Math.random() * 1000),
      name: input.name,
      email: input.email,
    };
    setContacts([...contacts, newContact]);
  };
  const deleteContact = (id) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContact);
  };
  return (
    <div>
      <Header />
      <NewContactForm addContactHandler={addContact} />
      <ContactList contacts={contacts} deleteContactHandler={deleteContact} />
    </div>
  );
};

export default ContactApp;
