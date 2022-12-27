import jwtDecode from "jwt-decode";
import Navbar from "./components/Navbar";

const App = () => {
  let logUser;
  if (localStorage.login) {
    const jwt = localStorage.getItem("login");
    logUser = jwtDecode(jwt);
  }
  return <Navbar user={logUser} />;
};

export default App;
