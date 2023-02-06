import Contact from "./Contact";

const ContactList = ({ contacts, deleteContactHandler }) => {
  const renderContacts = () => {
    return contacts.map((c) => {
      return (
        <Contact contact={c} deleteContactHandler={deleteContactHandler} />
      );
    });
  };
  return renderContacts();
};

export default ContactList;
