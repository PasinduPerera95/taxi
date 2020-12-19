import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";
import VforDForm from "./VfordForm";
import Table from './Table';

const Vford = ({  }) => {
     var [vehiclefordriversObjects, setvehiclefordriversObjects] = useState({});
     var [currentId, setcurrentId] = useState("");
     var i = 1;
     useEffect(() => {
       fireDB
         .database()
         .ref()
         .child("vehiclefordrivers")
         .on("value", (snapshot) => {
           if (snapshot.val() != null)
             setvehiclefordriversObjects({
               ...snapshot.val(),
             });
         });
     }, []);

      const addOrEdit = (obj) => {
        if (currentId == "")
          fireDB
            .database()
            .ref()
            .child("vehiclefordrivers")
            .push(obj, (err) => {
              if (err) console.log(err);
              else setcurrentId("");
            });
        else
          fireDB
            .database()
            .ref()
            .child(`vehiclefordrivers/${currentId}`)
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
             .child(`vehiclefordrivers/${key}`)
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
            <h1 className="display-4 text-center">Vehicle For Drivers</h1>
          </div>
        </div> */}
         <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">V for D</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        <h2>Vehicle For Drivers</h2>
        <div className="row">
          <div className="col-md-4">
            <VforDForm {...{ addOrEdit, currentId, vehiclefordriversObjects }} />
          </div>
          <div className="col-md-8">
            <table className="table table-border table-stripped">
              <thead className="thread-light">
                <tr>
                  <th>Index</th>
                  <th>Driver Id </th>
                  <th>Vehicle ID</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
                {Object.keys(vehiclefordriversObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{i++}</td>
                      <td>{vehiclefordriversObjects[id].driverid}</td>
                      <td>{vehiclefordriversObjects[id].vehicleid}</td>
                      
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
        <Table {...addOrEdit} />
      </React.Fragment>
    );
}

export default Vford;