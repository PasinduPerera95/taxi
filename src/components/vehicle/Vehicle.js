import React, { useState, useEffect } from "react";
import VehicleForm from "./VehicleForm";
import fireDB from "../../firebase";




const Vehicle = ({}) => {
  var i = 1;
  var [vehicleObjects, setVehicleObjects] = useState({});
  var [currentId, setcurrentId] = useState("");
  useEffect(() => {
    fireDB.database().ref().child("vehicle").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setVehicleObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      fireDB.database().ref().child("vehicle").push(obj, (err) => {
        if (err) console.log(err);
        else setcurrentId("");
      });
    else
      fireDB.database().ref().child(`vehicle/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else setcurrentId("");
      });
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure to delete this recod ?")) {
      fireDB.database().ref().child(`vehicle/${key}`).remove((err) => {
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
    <li className="breadcrumb-item"><a href="#">Vehicle Type</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>


      {/* <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-5 text-center">Vehicle Registration</h1>
        </div>
      </div> */}
      <div className="container">
        <h2>Vehicle Registration</h2>
        <div className="col-md-12">
            <VehicleForm {...{ addOrEdit, currentId, vehicleObjects }} />
          </div>
        <div className="row">
          
          <div className="col-md-12">
            <table className="table table-border table-stripped">
              <thead className="thread-light">
                <tr>
                  <th>Index</th>
                  <th>charges </th>
                  <th>engineno</th>
                  <th>name</th>
                  <th>plateno</th>
                  <th>vchassyno</th>
                  <th>vdidname</th>
                  <th>vdname</th>
                  <th>vehicletype</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(vehicleObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{i++}</td>
                      <td>{vehicleObjects[id].charges}</td>
                      <td>{vehicleObjects[id].engineno}</td>
                      <td>{vehicleObjects[id].name}</td>
                      <td>{vehicleObjects[id].plateno}</td>
                      <td>{vehicleObjects[id].vchassyno}</td>
                      <td>{vehicleObjects[id].vdidname}</td>
                      <td>{vehicleObjects[id].vdname}</td>
                      <td>{vehicleObjects[id].vehicletype}</td>
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
      </div>
    </React.Fragment>
  );
};

export default Vehicle;
