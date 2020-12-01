import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Shop from "./components/Shop";
import Nav from "./components/Nav";
//import Contacts from './components/Contacts';
import Vehicle from './components/vehicle/Vehicle';
import Driver from './components/driver/Driver';
import Customer from './components/customer/Customer';
import Pkg from './components/pkgdetail/Pkg';
import PkgAssign from "./components/PkgAssign/PkgAssign";
import Triphis from "./components/triphis/Triphis";
import Appbar from './components/icons/Appbar';
import  Drawer from "./components/icons/Drawer";
import Ftrips from "./components/ftrips/Ftrips";
import Login  from "./Login";
import fireDB from "./firebase";
//pimport VehicleForm from './components/vehicle/Vehicle';
//import VehicleForm from "./components/vehicle/VehicleForm";
///import Contacts from "./components/Contacts";

function App() {


 const [user, setuser] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [emailError, setemailError] = useState("");
 const [passwordError, setpasswordError] = useState("");
 const [hasAccount, sethasAccount] = useState(false);

 //function for login...
 const handleLogin = () => {
   fireDB
     .auth()
     .signInWithEmailAndPassword(email, password)
     .catch((err) => {
       switch (err.code) {
         case "auth/invalid-email":
         case "auth/user-disabled":
         case "auth/user-not-found":
           setemailError(err.message);
           break;
         case "auth/wrong-password":
           setpasswordError(err.message);
           break;
       }
     });
 };

 const handleSignup = () => {
   fireDB
     .auth()
     .createUserWithEmailAndPassword(email, password)
      .catch(
     // (err) => {
    //    switch (err.code) {
    //      case "auth/email-already-in-use":
    //      case "auth/user-disabled":
    //        setemailError(err.message);
    //      case "auth/invalid-email":
    //        setemailError(err.message);
    //        break;
    //      case "auth/weak-password":
    //        setpasswordError(err.message);
    //        break;
    //    }
    //  }
     );
 };

 const handleLogout = () => {
   fireDB.auth().signOut();
 };

 const authListener = () => {
   fireDB.auth().onAuthStateChanged((user) => {
     if (user) {
       setuser(user);
       clearinput();
     } else {
       setuser("");
     }
   });
 };

 const clearinput = () => {
   setemail("");
   setpassword("");
 };

 const clearErrors = () => {
   setemailError("");
   setpasswordError("");
 };
 useEffect(() => {
   authListener();
 }, []);





  return (
    // <Router>
    //   <div className="App">
    //     <Drawer />
    //     {/* <Contacts /> */}

    //     <Route path="/about" component={About} />
    //     <Route path="/shop" component={Shop} />
    //     {/* <Route path="/vehicle" component={Vehicle} /> */}
    //     {/* <Route path="/customer" component={Customer} /> */}
    //     {/* <Route path="/driver" component={Driver} /> */}
    //     {/* <Route path="/pkg" component={Pkg} /> */}
    //     {/* <Route path="/pkgas" component={PkgAssign} /> */}
    //     <Route path="/history" component={Triphis} />
    //     <Route path="/appbar" component={Appbar} />
    //     <Route path="/ftrips" component={Ftrips} />
    //   </div>
    // </Router>
    <Router>
      <div className="App">
        {/* <Contact/> */}
        {user ? (
          <Drawer handleLogout={handleLogout} />
        ) : (
          <Login
            email={email}
            setemail={setemail}
            password={password}
            setpassword={setpassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            sethasAccount={sethasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </div>
    </Router>
  );
}
// name:- pasindu12@gmail.com pw:-pasindu
export default App;
