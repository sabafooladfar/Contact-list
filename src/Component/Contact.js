import { FaTrash, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = ({ contact, deleteContactHandler }) => {
  // let id = useParams().id;
  // const navigate = useNavigate();
  return (
    <div className="contacts">
      <div className="contactContainer">
        <div className="contact">
          <FaUserCircle className="userIcon" />
          <Link to={`contact/${contact.id}`} state={contact}>
            <div>
              <div>{contact.name}</div>
              <div>{contact.email}</div>
            </div>
          </Link>
        </div>
        <div>
        <Link to={`/edit/${contact.id}`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button className="dltBtn" onClick={(e) => deleteContactHandler(contact.id, e)}>
          <FaTrash className="trashIcon" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
