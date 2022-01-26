// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Test/>
      <div className="App-link">
        <Link to="/home">Home</Link>
        <Link to="/login">Log-in</Link>
      </div>
      <div>
        <Route
          path="/home"
          render={(props) => {
            return <Home userName="meghu" {...props}/>;
          }}
        />
        <Route path="/login" component={Login} />
      </div>
      </div>
    </Router>
  );
}

export default App;
