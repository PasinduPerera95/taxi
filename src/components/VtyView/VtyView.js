import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";
import VtyViewForm from "./VtyViewForm";

const VtyView = ({  }) => {
      var [VtviewObjects, setVtviewObjects] = useState({});
      var [currentId, setcurrentId] = useState("");
      var i = 1;
      useEffect(() => {
        fireDB
          .database()
          .ref()
          .child("vehicletype")
          .on("value", (snapshot) => {
            if (snapshot.val() != null)
              setVtviewObjects({
                ...snapshot.val(),
              });
          });
      }, []);

      const addOrEdit = (obj) => {
        if (currentId == "")
          fireDB
            .database()
            .ref()
            .child("vehicletype")
            .push(obj, (err) => {
              if (err) console.log(err);
              else setcurrentId("");
            });
        else
          fireDB
            .database()
            .ref()
            .child(`vehicletype/${currentId}`)
            .set(obj, (err) => {
              if (err) {
                console.log(err);
              } else setcurrentId("");
            });
      };
      const onDelete = (key) => {
        if (window.confirm("Are you sure to delete this recod ?")) {
          fireDB
            .database()
            .ref()
            .child(`vehicletype/${key}`)
            .remove((err) => {
              if (err) {
                console.log(err);
              } else setcurrentId("");
            });
        }
      };
    return (
    
        <React.Fragment>
          {/* <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4 text-center">Vehicle Type</h1>
            </div>
          </div> */}
           <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Vehicle Type</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
          <h2>Vehicle Type</h2>
          <div className="row">
            <div className="col-md-4">
              <VtyViewForm {...{ addOrEdit, currentId, VtviewObjects }} />
            </div>
            <div className="col-md-8">
              <table className="table table-border table-stripped">
                <thead className="thread-light">
                  <tr>
                    <th>Index</th>
                    <th>Charges </th>
                    <th>InitialCharges</th>
                    <th>InitialDistance</th>
                    <th>VehicleType</th>
                    <th>WaitingCost</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(VtviewObjects).map((id) => {
                    return (
                      <tr key={id}>
                        <td>{i++}</td>
                        <td>{VtviewObjects[id].charges}</td>
                        <td>{VtviewObjects[id].initialcharge}</td>
                        <td>{VtviewObjects[id].initialdistance}</td>
                        <td>{VtviewObjects[id].vehicletype}</td>
                        <td>{VtviewObjects[id].waitingcost}</td>
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
        </React.Fragment>
    
    );
}

export default VtyView;