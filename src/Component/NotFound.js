import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <p>
        <b>404</b> <br /> page not found
      </p>
      <Link to="/">back to contact list</Link>
    </div>
  );
};

export default NotFound;
