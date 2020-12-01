import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";

const PkgasForm = (props) => {
   var [DriverObjects, setDriverObjects] = useState({});
  var [PkgObjects, setPkgObjects] = useState({});
     const Initialfieldval = {
       assid: "",
       customerphone: "",
       driverid: "",
       pkgid:"",
       tripstatus:"",
     };
      var [values, setvalues] = useState(Initialfieldval);
      useEffect(() => {
        if (props.currentId == "")
          setvalues({
            ...Initialfieldval,
          });
        else
          setvalues({
            ...props.PkgasObjects[props.currentId],
          });
///
  fireDB.database().ref().child("packagedetails").on("value", (snapshot) => {
         if (snapshot.val() != null)
           setPkgObjects({
             ...snapshot.val(),
           });
       });
///
fireDB.database().ref().child("drivers").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setDriverObjects({
                ...snapshot.val(),
              });
          });
          
      }, [props.currentId, props.PkgasObjects]);
         const handleInputChange = (e) => {
           var { name, value } = e.target;
           setvalues({
             ...values,
             [name]: value,
           });
         };
         const handleFormSubmit = (e) => {
           e.preventDefault();
           props.addOrEdit(values);
         };
    return (
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="assignid"
            name="assignid"
            value={values.assignid}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="customerphone"
            name="customerphone"
            value={values.customerphone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          {/* <input
            type="text"
            className="form-control"
            placeholder="driverid"
            name="driverid"
            value={values.driverid}
            onChange={handleInputChange}
          /> */}
                             <select class="form-control "   name="driverid"
            value={values.driverid}
            onChange={handleInputChange}>
              <option>Driver ID</option>
               {Object.keys(DriverObjects).map((id) => {
                  return (<option>{DriverObjects[id].index}</option>)
                })} 
        
</select>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          {/* <input
            type="text"
            className="form-control"
            placeholder="pkgid"
            name="pkgid"
            value={values.pkgid}
            onChange={handleInputChange}
          /> */}
            <select class="form-control "   name="pkgid"
            value={values.pkgid}
            onChange={handleInputChange}>
              <option>Select PKG</option>
                  {Object.keys(PkgObjects).map((id) => {
                  return (<option>{PkgObjects[id].packagen}</option>)})}
  
</select>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          {/* <input
            type="text"
            className="form-control"
            placeholder="tripstatus"
            name="tripstatus"
            value={values.tripstatus}
            onChange={handleInputChange}
          /> */}
                       <select class="form-control "   name="tripstatus"
            value={values.tripstatus}
            onChange={handleInputChange}>
              <option>Select Status</option>
  <option>pending</option>
  <option>accept</option>
</select>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={props.currentId == "" ? "save" : "Update"}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    );
}

export default PkgasForm;