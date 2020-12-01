import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import fireDB from "../../firebase";
import Autocomplete from "@material-ui/lab/Autocomplete";


const VfordForm = (props) => {
 


  const Initialfieldval = {
    driverid: "",
    vehicleid: "",
  };

     var [DriverObjects, setDriverObjects] = useState({});
     var [currentId, setcurrentId] = useState("");
      var [vehicleObjects, setVehicleObjects] = useState({});

  var [values, setvalues] = useState(Initialfieldval);


      // useEffect(() => {
      //   fireDB
      //     .database()
      //     .ref()
      //     .child("drivers")
      //     .on("value", (snapshot) => {
      //       if (snapshot.val() != null)
      //         setDriverObjects({
      //           ...snapshot.val(),
      //         });
      //     });
      // }, []); 



  useEffect(() => {
    if (props.currentId == "")
      setvalues({
        ...Initialfieldval,
      });
    else
      setvalues({
        ...props.vehiclefordriversObjects[props.currentId],
      });


       fireDB.database().ref().child("vehicle").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setVehicleObjects({
          ...snapshot.val(),
        });
    });

  
  fireDB.database().ref().child("drivers").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setDriverObjects({
                ...snapshot.val(),
              });
          });
  }, [props.currentId, props.vehiclefordriversObjects]);
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


  //const var =()=>{}

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="DriverID"
          name="driverid"
          value={values.driverid}
          onChange={handleInputChange}
        />
                   <select class="form-control "   name="driverid"
            value={values.driverid}
            onChange={handleInputChange}>
               {Object.keys(DriverObjects).map((id) => {
                  return (  <option>{DriverObjects[id].index}</option> );
                })} 
        
</select>
    
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
          placeholder="VehicleID"
          name="vehicleid"
          value={values.vehicleid}
          onChange={handleInputChange}
        />
  
         <select class="form-control "    name="vehicleid"
            value={values.vehicleid}
            onChange={handleInputChange}>

              {Object.keys(vehicleObjects).map((id) => {
                  return (  <option>{vehicleObjects[id].vdidname}</option> );
                })} 
   
</select>
      </div>
      {/*  */}
      {/* <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control">
         
        { Object.keys(DriverObjects).map((id) = 
                  return(<option>{DriverObjects[id].dlno}</option>) ;
                )}
        </select>
      </div> */}
      {/*  */}
     
   

      {/*  */}
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

export default VfordForm;