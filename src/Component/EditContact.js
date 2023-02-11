import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditContact = ({ editContactHandler }) => {
  const [input, setInput] = useState({ name: "", email: "" });

  const id = useParams().id;
  //   console.log(id);
  const submitHandler = (e) => {
    e.preventDefault();
    editContactHandler(id,input);
    setInput({ name: "", email: "" });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3002/contacts/${id}`)
      .then((res) => {
        setInput({ name: res.data.name, email: res.data.email });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className="newContactForm" onSubmit={(e) => submitHandler(e)}>
      <h4>Edit Contact</h4>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          value={input.name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
      </div>
      <button type="submit">Edit</button>
    </form>
  );
};

export default EditContact;
