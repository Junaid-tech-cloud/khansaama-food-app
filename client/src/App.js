import React from "react";
//import {Route} from 'react-router-dom';
//import {Providor} from 'react-redux'
//import ErrorModal from './Components/ErrorModal/ErrorModal';
//import ErrorContextProvider from './Components/Context/Error';
//import AuthContextProvider from './Components/Context/Auth-context';
//import { AuthContextt } from './Components/Context/AuthContext';
import { Route, Switch } from "react-router-dom";
// import MainPage from './Components/WebsiteMainPage/MainPage';
//import DashBoard from "./Components/ChefDashBoard/DashBoard";
import ChefDashBoard from "./Components/ChefDashBoard/Dashboard"
import CustomerHomePage from "./Components/CustomerHomePage/CustomerHomePage";
// import About from './Components/About/About';
// import WhyUs from './Components/Why-us/WhyUs';
// import OurSpecials from './Components/OurSpecials/OurSpecials';
import Menu from "./Components/Menu/Menu";
// import Gallery from './Components/Gallery/Gallery';
// import Chefs from './Components/Chefs/Chefs';
// import Contact from './Components/Contact/Contact';
import CustomerRegistration from "./Components/CustomerRegistration/CustomerRegistration";
//import CustomerRegistration from './Components/CustomerRegistration/CustomerRegistration';
import CustomerLogin from "./Components/LoginPage/CustomerLoginPage";
import AddFood from "./Components/ChefDashBoard/AddFood"

const App = () => {
  return (
    <Switch>
      <div>
        <Route path="/register" component={CustomerRegistration} />
        <Route path="/login" component={CustomerLogin} />
        <Route path="/home" component={CustomerHomePage} />
        <Route path="/dashboard" component={ChefDashBoard} />
        <Route path="/chef/:chefId/dishes" component={Menu} />
        <Route path="/add/food" component={AddFood} />

      </div>
    </Switch>
  );
};

export default App;
