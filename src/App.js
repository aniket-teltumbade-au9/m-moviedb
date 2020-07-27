import React from "react";
import "./styles.css";
import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie_detail/:movieId" component={MovieDetailPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}
