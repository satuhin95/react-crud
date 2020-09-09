import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/pages/Home'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Navbar from './component/layouts/Navbar'
import { BrowserRouter as Router, Switch,Route,Link} from "react-router-dom";
import NotFound from './component/pages/NotFound';
import AddUsers from './component/users/AddUsers';
import EditUser from './component/users/EditUser';
import User from './component/users/User';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/about" component={About}/>
         <Route exact path="/contact" component={Contact}/>
         <Route exact path="/users/add" component={AddUsers}/>
         <Route exact path="/users/edit/:id" component={EditUser}/>
         <Route  exact path="/users/:id" component={User}/>

         <Route component={NotFound}/>
      
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
