import ContactList from "./ContactList";
import Header from "./Header";
import NewContactForm from "./NewContactForm";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

const ContactApp = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/add-new-contact" element={<NewContactForm />} />
        <Route path="/" element={<ContactList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default ContactApp;
