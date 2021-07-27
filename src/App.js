import './App.css';
import Welcome from './pages/welcome-page/Welcome'
import {BrowserRouter as Router,Switch,Link,Route} from 'react-router-dom'
import Login from './pages/login-page/login';

function App() {
  return (
    <div className="App">
      <Router>
         <Switch>
           <Route exact path="/"><Welcome/></Route>
           <Route path="/login"><Login/></Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
