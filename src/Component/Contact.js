import { FaTrash ,FaUserCircle} from "react-icons/fa";

const Contact = ({ contact,deleteContactHandler }) => {
  return (
    <div className="contacts">
      <div className="contactContainer">
        <div className="contact">
          <FaUserCircle className="userIcon"/>
          <div>
            <div>{contact.name}</div>
            <div>{contact.email}</div>
          </div>
        </div>
        <button onClick={()=>deleteContactHandler(contact.id)}>
          <FaTrash className="trashIcon"/>
        </button>
      </div>
    </div>
  );
};

export default Contact;
