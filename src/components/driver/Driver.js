import React, { useState, useEffect } from "react";
import DriverForm from "./DriverForm";
import fireDB from "../../firebase";
import Drimg from "./Drimg";
import Auth from "./Auth";
import Button from "@material-ui/core/Button";
import Dprofile from "./Dprofile";
import dprof1 from "./Driprof1";
import Divider from "@material-ui/core/Divider";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const Driver = ({  }) => {
      var [DriverObjects, setDriverObjects] = useState({});
      var [currentId, setcurrentId] = useState("");
      var i = 1;
      //////

      //////
        useEffect(() => {
          fireDB.database().ref().child("drivers").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setDriverObjects({
                ...snapshot.val(),
              });
          });
        }, []);

          const addOrEdit = (obj) => {
            if (currentId == "")
              fireDB.database().ref().child("drivers").push(obj, (err) => {
                if (err) console.log(err);
                else setcurrentId("");
              });
            else
              fireDB.database().ref().child(`drivers/${currentId}`).set(obj, (err) => {
                if (err) {
                  console.log(err);
                } else setcurrentId("");
              });
          };

             const onDelete = (key) => {
               if (window.confirm("Are you sure to delete this recod ?")) {
                 fireDB.database().ref().child(`drivers/${key}`).remove((err) => {
                   if (err) {
                     console.log(err);
                   } else setcurrentId("");
                 });
               }
             };


    return (
      <React.Fragment>
                    <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Driver</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        {/* <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Driver Registration</h1>
          </div>
        </div> */}
        <h3>Driver Registration </h3>
        <div className="card">
          <div className="card-body">
            <DriverForm {...{ addOrEdit, currentId, DriverObjects, i }} />
            <div className="row">
              <div className="col">
                {/* <Drimg /> */}
                {/* <Button variant="contained" color="primary">
                  profile View of Drivers
                </Button> */}
                {/* <input
                  type="submit"
                  //value={props.currentId == "" ? "save" : "Update"}
                  value="profile View of Drivers"
                  name="email"
                  className="btn btn-primary btn-block"
                /> */}
              </div>
              <div className="col">
                {/* <Auth /> */}
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="col-md-0">
            {/* <DriverForm {...{ addOrEdit, currentId, DriverObjects }} /> */}
          </div>
          <div className="col-md-12">
            <table className="table table-bordered">
              <thead className="thread-light">
                <tr>
                  <th>index</th>
                  <th>View More</th>
                  <th>Account number</th>
                  <th>Age</th>
                  <th>Bank name</th>
                  <th>Driver Address</th>
                  <th>Driver b.day</th>
                  {/* <th>Driver Image</th> */}
                  <th>Driver lisence number</th>
                  <th>dmiddlename</th>
                  <th>dname</th>
                  <th>email</th>
                  <th>gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(DriverObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{i++}</td>
                      <td>
                        <Link to={`./dprof`}>more</Link>
                        <Switch>
                          <Route path="/dprof">
                            <Dprofile
                              {...{ addOrEdit, currentId, DriverObjects, i }}
                            />
                          </Route>
                        </Switch>
                      </td>
                      <td>{DriverObjects[id].accountno}</td>
                      <td>{DriverObjects[id].age}</td>
                      <td>{DriverObjects[id].bankname}</td>
                      <td>{DriverObjects[id].daddress}</td>
                      <td>{DriverObjects[id].dbirthday}</td>
                      {/* <td>{DriverObjects[id].dimage}</td> */}
                      <td>{DriverObjects[id].dlno}</td>
                      <td>{DriverObjects[id].dmiddlename}</td>
                      <td>{DriverObjects[id].dname}</td>
                      <td>{DriverObjects[id].email}</td>
                      <td>{DriverObjects[id].gender}</td>
                      {/* <td>{DriverObjects[id].index}</td> */}

                      <td>
                        <a
                          className="btn text-primary"
                          onClick={() => {
                            setcurrentId(id);
                          }}
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a
                          className="btn text-danger"
                          onClick={() => {
                            onDelete(id);
                          }}
                        >
                          <i className="far fa-trash-alt"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <Switch>
          <Route path="/dprof">
            <Dprofile />
          </Route>
        </Switch>
      </React.Fragment>
    );
}

export default Driver;