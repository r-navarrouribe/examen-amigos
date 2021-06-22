import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { Cabecera } from "./components/Cabecera";
import { PaginaNotFound } from "./paginas/PaginaNotFound";
import { PaginaPrincipal } from "./paginas/PaginaPrincipal";

function App() {
  return (
    <>
      <div className="container">
        <Router>
          <Cabecera />
          <Switch>
            <Route path="/principal" exact>
              <PaginaPrincipal />
            </Route>
            <Route path="/" exact>
              <Redirect to="/principal" />
            </Route>
            <Route path="**" exact>
              <PaginaNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
