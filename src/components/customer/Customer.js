import React, { useState, useEffect } from "react";
import fireDB from '../../firebase';
import CustomerForm from "./CustomerForm";
import Stable from "./Stable";


const Customer = () => {
      var [CustomerObjects, setCustomerObjects] = useState({});
      var [currentId, setcurrentId] = useState("");
      var i =1;
      useEffect(() => {
        fireDB.database().ref().child("customers").on("value", (snapshot) => {
          if (snapshot.val() != null)
            setCustomerObjects({
              ...snapshot.val(),
            });
        });
      }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      fireDB.database().ref().child("customers").push(obj, (err) => {
        if (err) console.log(err);
        else setcurrentId("");
      });
    else
      fireDB.database().ref().child(`customers/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else setcurrentId("");
      });
  };
   const onDelete = (key) => {
     if (window.confirm("Are you sure to delete this recod ?")) {
       fireDB.database().ref().child(`customers/${key}`).remove((err) => {
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
            <h1 className="display-4 text-center">Customer Registration</h1>
          </div>
        </div> */}
            <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Customer</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        
        <h2>Customer Registration </h2>
        <div className="row">
          <div className="col-md-4">
            <CustomerForm {...{ addOrEdit, currentId, CustomerObjects }} />
          </div>
          <div className="col-md-8">
            <table className="table table-border table-stripped">
              <thead className="thread-light">
                <tr>
                  <th>Index</th>
                  <th>Address </th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(CustomerObjects).map((id) => {
                  return (
                    <tr key={id}>
                      <td>{i++}</td>
                      <td>{CustomerObjects[id].address}</td>
                      <td>{CustomerObjects[id].email}</td>
                      <td>{CustomerObjects[id].mobile}</td>
                      <td>{CustomerObjects[id].name}</td>
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
                  )
                })}
              
              </tbody>
            </table>
          </div>
        </div>
        <Stable />
      </React.Fragment>
    );
}

export default Customer;