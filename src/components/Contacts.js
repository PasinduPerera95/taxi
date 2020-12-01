import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDB from "../firebase";
//import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";

const Contacts = () => {
  var [contactObjects, setContactObjects] = useState({});
  var [currentId, setcurrentId] = useState("");

  useEffect(() => {
    fireDB.database().ref().child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactObjects({
          ...snapshot.val(),
        });
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      fireDB.database().ref().child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setcurrentId("");
      });
    else
      fireDB.database().ref().child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) {
          console.log(err);
        } else setcurrentId("");
      });
  };

  const onDelete = key=>{
    if(window.confirm('Are you sure to delete this recod ?')){
      fireDB.database().ref().child(`contacts/${key}`).remove((err) => {
        if (err) {
          console.log(err);
        } else setcurrentId("");
      });
    }
  }

  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Customer Registration</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3">
          <ContactForm {...{ addOrEdit, currentId, contactObjects }} />
        </div>
        <div className="col-md-9">
          <table className="table table-border table-stripped">
            <thead className="thread-light">
              <tr>
                <th>Full Name </th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{contactObjects[id].fullname}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>{contactObjects[id].address}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => {
                          setcurrentId(id);
                        }}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </a>
                      <a className="btn text-danger" onClick={()=>{onDelete(id)}}>
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
};

export default Contacts;
