import Contact from "./Contact";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, deleteContactHandler }) => {
  const renderContacts = () => {
    return contacts.map((c) => {
      return (
        <Contact contact={c} deleteContactHandler={deleteContactHandler} />
      );
    });
  };
  return (
    <div>
      <div className="contactListContainer">
        <Link to="/add-new-contact">
          <button>Add New Contact</button>
        </Link>
      </div>
      {renderContacts()}
    </div>
  );
};

export default ContactList;
