import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="App">
      <h1>Express React Practice</h1>
      <Link to="/">TopPage</Link>
      <br />
      <Link to="/users">UsersPage</Link>
    </div>
  );
};

export default Top;
