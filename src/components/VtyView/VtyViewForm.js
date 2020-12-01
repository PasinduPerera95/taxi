import React, { useEffect, useState } from "react";

const VtyViewForm = (props) => {
    const Initialfieldval = {
      charges: "",
      initialcharge: "",
      initialdistance: "",
      vehicletype: "",
      waitingcost:"",
    };

     var [values, setvalues] = useState(Initialfieldval);
     useEffect(() => {
       if (props.currentId == "")
         setvalues({
           ...Initialfieldval,
         });
       else
         setvalues({
           ...props.VtviewObjects[props.currentId],
         });
     }, [props.currentId, props.VtviewObjects]);
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
            placeholder="charges"
            name="charges"
            value={values.charges}
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
            placeholder="initialcharge"
            name="initialcharge"
            value={values.initialcharge}
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
            placeholder="initialdistance"
            name="initialdistance"
            value={values.initialdistance}
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
            placeholder="waitingcost"
            name="waitingcost"
            value={values.waitingcost}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
        
          <select class="form-control "   name="vehicletype"
            value={values.vehicletype}
            onChange={handleInputChange}>
              <option>Select Vehicle</option>
  <option>Car</option>
  <option>Van</option>
  <option>Mini-Van</option>
  <option>Mini-car</option>
  <option>Dimo-Lorry</option>
  <option>Lorry</option>
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

export default VtyViewForm;