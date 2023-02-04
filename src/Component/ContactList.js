import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  const renderContacts = () => {
    return contacts.map((c) => {
      return <Contact contact={c} />;
    });
  };
  return renderContacts();
};

export default ContactList;
