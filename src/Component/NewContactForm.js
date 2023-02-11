import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const NewContactForm = () => {
  const [input, setInput] = useState({ name: "", email: "" });

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newContact = {
      name: input.name,
      email: input.email,
    };
    axios
      .post("http://localhost:3002/contacts", newContact)
      .then(() => {
        navigate("/");
      })
      .catch();
  };

  return (
    <form className="newContactForm" onSubmit={(e) => submitHandler(e)}>
      <h4>Add Contact</h4>
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
      <button type="submit">Add</button>
    </form>
  );
};

export default NewContactForm;
