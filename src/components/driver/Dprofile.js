import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import fireDB from "../../firebase";
import Driprof1 from "./Driprof1";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img2.jpg";
import Drimg from "./Drimg";
import Auth from "./Auth";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({ 
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Dprofile = ({ props }) => {
  const [user, setuser] = useState("");
 const [email, setemail] = useState("");
 const [password, setpassword] = useState("");
 const [emailError, setemailError] = useState("");
 const [passwordError, setpasswordError] = useState("");
 const [hasAccount, sethasAccount] = useState(false);
 ///////
  var [DriverObjects, setDriverObjects] = useState({});
  var [currentId, setcurrentId] = useState("");
  var i = 1;
  //////

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

 const authListener = () => {
   fireDB.auth().onAuthStateChanged((user) => {
     if (user) {
       setuser(user);
      
     } else {
       setuser("");
     }
   });
 };

  useEffect(() => {
     authListener();


    fireDB
      .database()
      .ref()
      .child("drivers")
      .on("value", (snapshot) => {
        if (snapshot.val() != null)
          setDriverObjects({
            ...snapshot.val(),
          });
      });
  }, []);
  //////
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1>This is Driver Profile!!!</h1>
      <div className="row">
        <div className="col-md-7">
          {Object.keys(DriverObjects).map((id) => {
            return (
              <div className="card" style={{backgroundColor:'#762925', marginTop:'20px', alignContent:'center'}}>
                <div className="card-body">
                  <div className={classes.root}>
                    <div className="row">
                      <div className="col">
                        <img  src={DriverObjects[id].img1} className="img-thumbnail"/>
                        </div>
                        <div className="col">
                        <img  src={DriverObjects[id].img2}  className="img-thumbnail"/>
                        </div>
                        <div className="col">
                         

                        </div>
                       <Divider/>
                        </div>
                         {/* <Driprof1 {...{DriverObjects}}/> */}
                        <h4>D.Name:- {DriverObjects[id].dname} {DriverObjects[id].dmiddlename}</h4>
                        <h4>D.ID:-{DriverObjects[id].index}</h4>
                        <h4>Acc No:- {DriverObjects[id].accountno}  ({DriverObjects[id].bankname})</h4>
                        <h4>Age:- {DriverObjects[id].age}</h4>
                        <h4>Address:- {DriverObjects[id].daddress}</h4>
                        <h4>Birthday:- {DriverObjects[id].dbirthday}</h4>
                        <h4>Lisence No.:- {DriverObjects[id].dlno}</h4> 
                        <h4>Mobile No:- {DriverObjects[id].mobile}</h4>              
                        <h4>Email:- {DriverObjects[id].email}</h4>
                       
                  </div>
                  <div>
                  <Divider/>
                  </div>
                  <div className="row">
    
                    <div className="col"><Auth
                            email={email}
                            setemail={setemail}
                            password={password}
                            setpassword={setpassword}
                           // handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            sethasAccount={sethasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                    /></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-0"></div>
      </div>
    </React.Fragment>
  );
};

export default Dprofile;
