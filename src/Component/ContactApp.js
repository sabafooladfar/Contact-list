import ContactList from "./ContactList";
import Header from "./Header";
import NewContactForm from "./NewContactForm";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import Contact from "./Contact";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  let navigate = useNavigate();

  const addContact = (input) => {
    const newContact = {
      name: input.name,
      email: input.email,
    };
    axios
      .post("http://localhost:3002/contacts", newContact)
      .then((res) => {
        navigate("/");
        setContacts([...contacts, newContact]);
      })
      .catch();
  };
  const deleteContact = (id, e) => {
    e.preventDefault();
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(filteredContact);
    axios
      .delete(`http://localhost:3002/contacts/${id}`)
      .catch((err) => console.log(err));
  };
  const editContact = async (id, input) => {
    try {
      await axios.put(`http://localhost:3002/contacts/${id}`, input);
      navigate("/");
      const { data } = await axios.get("http://localhost:3002/contacts");
      setContacts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route
          path="/edit/:id"
          element={<EditContact editContactHandler={editContact} />}
        />
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
