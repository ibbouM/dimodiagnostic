import { BrowserRouter as Switch, Route } from "react-router-dom";
import Accueil from "./View/body/accueil";
import FormContact from "./View/body/home";
import Login from "./View/body/login";
import SignUp from "./View/body/signup";

const Routes = () => {
  return (
    <Switch>
        <Route  exact path="/" component={Accueil}/>
      <Route  path="/contact" component={FormContact} />
      <Route path="/inscription" component={SignUp}/>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
