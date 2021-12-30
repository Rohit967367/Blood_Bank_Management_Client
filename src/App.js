
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './Page/Home/Home';
import LogIn from './Page/LogIn/LogIn';
import Register from './Page/Register/Register';
import Contact from './Page/Contact/Contact'
import Donar from './Page/Donar/Donar';
import Request from './Page/Request/Request';
import DonarForm from './Page/Donar/DonarForm';
import RequestForm from './Page/Request/RequestForm';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import RequestF from './Page/Request/RequestF';
import Pdf from "./Page/Pdf/Pdf"

function App() {

  let {user} = useContext(AuthContext) 
  return (
    <Router>
      <Switch>
        {/* <Route exact path='/'>
        </Route> */}


        <Route exact path='/'>
          {user ? 
          <Home /> 
          : <Redirect to="/login" />}
        </Route>

        <Route path='/login'>
          {!user ? 
          <LogIn /> 
          : <Redirect to='/' />}
        </Route>
        <Route path='/Register'>
          {!user ? 
          <Register /> 
          : <Redirect to='/' />}
        </Route>

        {user ?
          <>
            <Route path='/Contact'>
              <Contact />
            </Route>
            <Route path='/Donar'>
              <Donar />
            </Route>
            <Route path='/Request'>
              <Request />
            </Route>
            <Route path='/DonarForm'>
              <DonarForm />
            </Route>
            <Route path='/RequestForm'>
              <RequestForm />
            </Route>
            <Route path='/RequestF'>
              <RequestF />
            </Route>
            <Route path='/Pdf'>
              <Pdf />
            </Route>
          </>
          : <Redirect to='/login' />
        }
      </Switch>
    </Router>
  );
}

export default App;
