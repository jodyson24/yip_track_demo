import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home"
import Track from './pages/track'

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <div className="Main">
            <Route exact path="/" component={Home} />
            <Route path="/track" component={Track} />
          </div>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
