import { useLocation } from "react-router-dom";
const ContactDetail = () => {
    console.log(useLocation());
  const {state} = useLocation();
//   const { name, email } = contact;
  return (
    <div>
      <p>contact's name is :{state.name}</p>
      <p>contact's email is :{state.email}</p>
    </div>
  );
};

export default ContactDetail;
