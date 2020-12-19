import React, { useState, useEffect } from "react";
import fireDB from '../../firebase';
import PkgasForm from "./PkgasForm";

const PkgAssign = ({  }) => {
          var [PkgasObjects, setPkgasObjects] = useState({});
          var [currentId, setcurrentId] = useState("");

          
        useEffect(() => {
          fireDB.database().ref().child("packageassign").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setPkgasObjects({
                ...snapshot.val(),
              });
          });
        }, []);
        ///////////

        ///////////
        
          const addOrEdit = (obj) => {
            if (currentId == "")
              fireDB.database().ref().child("packageassign").push(obj, (err) => {
                if (err) console.log(err);
                else setcurrentId("");
              });
            else
              fireDB.database().ref().child(`packageassign/${currentId}`).set(obj, (err) => {
                if (err) {
                  console.log(err);
                } else setcurrentId("");
              });
          };

                  const onDelete = (key) => {
                    if (window.confirm("Are you sure to delete this recod ?")) {
                      fireDB.database().ref().child(`packageassign/${key}`).remove((err) => {
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
            <h1 className="display-4 text-center">Package Assigning</h1>
          </div>
        </div> */}
                   <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">PKG Assign</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        <h2>Package Assigning</h2>
        <div className="row">
          <div className="col-md-3">
            <PkgasForm {...{ addOrEdit, currentId, PkgasObjects }} />
          </div>
          <div className="col-md-9">
            <table className="table table-border table-stripped">
              <thead className="thread-light">
                <tr>
                  <th>assignid</th>
                  <th>customerphone</th>
                  <th>driverid</th>
                  <th>pkgid</th>
                  <th>tripstatus</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(PkgasObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{PkgasObjects[id].assignid}</td>
                      <td>{PkgasObjects[id].customerphone}</td>
                      <td>{PkgasObjects[id].driverid}</td>
                      <td>{PkgasObjects[id].pkgid}</td>
                      <td>{PkgasObjects[id].tripstatus}</td>

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

export default PkgAssign;