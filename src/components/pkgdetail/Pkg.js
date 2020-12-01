import React, { useEffect, useState } from "react";

import PkgForm from "./PkgForm";
import fireDB from "../../firebase";

const Pkg = () => {
     var [PkgObjects, setPkgObjects] = useState({});
     var [currentId, setcurrentId] = useState("");
     var i = 1;
     useEffect(() => {
       fireDB.database().ref().child("packagedetails").on("value", (snapshot) => {
         if (snapshot.val() != null)
           setPkgObjects({
             ...snapshot.val(),
           });
       });
     }, []);
       const addOrEdit = (obj) => {
         if (currentId == "")
           fireDB.database().ref().child("packagedetails").push(obj, (err) => {
             if (err) console.log(err);
             else setcurrentId("");
           });
         else
           fireDB.database().ref().child(`packagedetails/${currentId}`).set(obj, (err) => {
             if (err) {
               console.log(err);
             } else setcurrentId("");
           });
       };

         const onDelete = (key) => {
           if (window.confirm("Are you sure to delete this recod ?")) {
             fireDB.database().ref().child(`packagedetails/${key}`).remove((err) => {
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
            <h1 className="display-4 text-center">Package Detail</h1>
          </div>
        </div> */}
           <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">PKG Detail</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
<h2>Package Detail</h2>
        <div className="row">
          <div className="col-md-3">
            <PkgForm {...{ addOrEdit, currentId, PkgObjects }} />
          </div>
          <div className="col-md-9">
            <table className="table table-border table-stripped">
              <thead className="thread-light">
                <tr>
                  <th>Index</th>
                  <th>Initial Cost</th>
                  <th>Initial Distance</th>
                  <th>initialhours</th>
                  <th>nexthourcost</th>
                  <th>NextHours</th>
                  <th>packagen</th>
                  <th>vehicleType</th>
                  <th>waitingcost</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(PkgObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{i++}</td>
                      <td>{PkgObjects[id].initialcost}</td>
                      <td>{PkgObjects[id].initialdistance}</td>
                      <td>{PkgObjects[id].initialhours}</td>
                      <td>{PkgObjects[id].nexthourcost}</td>
                      <td>{PkgObjects[id].nexthours}</td>
                      <td>{PkgObjects[id].packagen}</td>
                      <td>{PkgObjects[id].vehicletype}</td>
                      <td>{PkgObjects[id].waitingcost}</td>
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

export default Pkg;