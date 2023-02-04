import ContactList from "./ContactList";
import Header from "./Header";
import NewContactForm from "./NewContactForm";
import { useState } from "react";
const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (input) => {
    const newContact = {
      name: input.name,
      email: input.email,
    };
    setContacts([...contacts, newContact]);
  };
  return (
    <div>
      <Header />
      <NewContactForm onSubmit={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
