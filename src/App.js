import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app__body">
          <Router>
            {/* sidebar component */}
            <Sidebar />

            <Switch>
              {/* Routes */}
              <Route path="/rooms/:roomId">
                {/* chat component */}
                <Chat />
              </Route>

              <Route path="/">
                {/* chat component */}
                {/* <Chat /> */}
              </Route>
              {/* end of routes */}
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
