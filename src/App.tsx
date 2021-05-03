import "./App.scss"
import Search from "./Search"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Link to="/search">Search</Link>
          <h1>Pagina principal</h1>
        </Route>
        <Route path="/search">
          <Link to="/">Me</Link>
          <Search />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

