import ContactList from "./ContactList";
import Header from "./Header";
import NewContactForm from "./NewContactForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, redirect } from "react-router-dom";
import NotFound from "./NotFound";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const addContact = (input) => {
    const newContact = {
      name: input.name,
      email: input.email,
    };
    axios
      .post("http://localhost:3002/contacts", newContact)
      .then((res) => {
        redirect("/");
        axios.get("http://localhost:3002/contacts");
        // setContacts(res.data);
      })
      .catch();
    // setContacts([...contacts, newContact]);
  };
  const deleteContact = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3002/contacts/${id}`)
      .then(() => axios.get("http://localhost:3002/contacts"))
      .then(() => {
        setContacts([]);
      })
      .catch((err) => console.log(err));
    // const filteredContact = contacts.filter((contact) => {
    //   return contact.id !== id;
    // });
    // setContacts(filteredContact);
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/add-new-contact"
          element={<NewContactForm addContactHandler={addContact} />}
        />
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              deleteContactHandler={deleteContact}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ContactApp;
