import { BrowserRouter, Route } from "react-router-dom";
import MovieRanking from "./pages/MovieRanking";
import User from "./pages/User";
import UserStatics from "./pages/UserStatics";
import MovieDetail from './pages/MovieDetailPage';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MovieRanking} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/user/statics/:id" component={UserStatics} />
        <Route exact path="/movieDetail/:movieId" component={MovieDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
