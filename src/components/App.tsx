import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FavoritesProvider } from "../hooks/useFavoritesContext";
import { CurrentSongProvider } from "../hooks/useCurrentSongContext";
import Search from "./Search";
import Favorites from "./Favorites";
import Player from "./Player";
import "../styles/App.scss";

const App = () => {

  return (
    <FavoritesProvider>
    <CurrentSongProvider>
      <Router>
      <Link to="/search">Search</Link>
      <Link to="/">Home</Link>
      <Switch>
        <Route exact path="/">
          <Favorites/>
        </Route>
        <Route path="/search">
          <Search/>
        </Route>
      </Switch>
    </Router>
    <Player />
    </CurrentSongProvider>
    </FavoritesProvider>
  );
};

export default App;
