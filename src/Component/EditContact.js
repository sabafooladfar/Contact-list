import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const [input, setInput] = useState({ name: "", email: "" });
  let navigate = useNavigate();

  const id = useParams().id;
  //   console.log(id);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3002/contacts/${id}`, input);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
