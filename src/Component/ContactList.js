import Contact from "./Contact";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);
  const [searchContact, setSearchContact] = useState("");

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

  const searchHandler = (e) => {
    setSearchContact(e.target.value);
    const search = e.target.value;
    if (search !== "") {
      const filteredContact = allContacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
      setContacts(filteredContact);
    } else {
      setContacts(allContacts);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/contacts")
      .then((res) => {
        setContacts(res.data);
        setAllContacts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="contactListContainer">
        <input
          type="text"
          placeholder="search contacts"
          value={searchContact}
          onChange={(e) => searchHandler(e)}
        />
        <Link to="/add-new-contact">
          <button>Add New Contact</button>
        </Link>
      </div>
      {contacts.map((c) => {
        return <Contact contact={c} deleteContactHandler={deleteContact} />;
      })}
    </div>
  );
};

export default ContactList;
