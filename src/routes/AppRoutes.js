import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";
import Role from "../components/Role/Role";
import GroupRole from "../components/GroupRole/GroupRole";
import HomePage from "../components/HomePage/HomePage";
import About from "../components/About/About";

const AppRoutes = (props) => {
  const Projects = () => {
    return (
      <div className="container mt-3">
        <h4>Todo...</h4>
      </div>
    );
  };
  return (
    <>
      <Switch>
        <PrivateRoutes path="/users" component={Users} />
        <PrivateRoutes path="/projects" component={Projects} />
        <PrivateRoutes path="/roles" component={Role} />
        <PrivateRoutes path="/group-role" component={GroupRole} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="*">
          <div className="container">404 Not Found</div>
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
