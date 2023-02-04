import { useState } from "react";
const NewContactForm = ({ onSubmit }) => {
  const [input, setInput] = useState({ name: "", email: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput({name: "", email: ""});
  };

  return (
    <form className="newContactForm" onSubmit={submitHandler}>
      <h4>Add Contact</h4>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input.name}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={input.email}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewContactForm;
