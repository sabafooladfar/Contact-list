import { useState } from "react";
const NewContactForm = ({ addContactHandler }) => {
  const [input, setInput] = useState({ name: "", email: "" });
  // console.log(input);
  const submitHandler = (e) => {
    e.preventDefault();
    addContactHandler(input);
    setInput({ name: "", email: "" });
  };

  return (
    <form className="newContactForm" onSubmit={submitHandler}>
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
