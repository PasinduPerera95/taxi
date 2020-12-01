import React, { useEffect, useState } from "react";

const PkgForm = (props) => {
     const Initialfieldval = {
       initialcost: "",
       initialdistance: "",
       initialhours: "",
       nexthourcost: "",
       nexthours: "",
       packagen: "",
       vehicletype: "",
       waitingcost: "",
      
     };
       var [values, setvalues] = useState(Initialfieldval);
       useEffect(() => {
         if (props.currentId == "")
           setvalues({
             ...Initialfieldval,
           });
         else
           setvalues({
             ...props.PkgObjects[props.currentId],
           });
       }, [props.currentId, props.PkgObjects]);
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
            placeholder="initialcost"
            name="initialcost"
            value={values.initialcost}
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
            placeholder="initialhours"
            name="initialhours"
            value={values.initialhours}
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
            placeholder="nexthourcost"
            name="nexthourcost"
            value={values.nexthourcost}
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
            placeholder="nexthours"
            name="nexthours"
            value={values.nexthours}
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
            placeholder="packagen"
            name="packagen"
            value={values.packagen}
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
            placeholder="vehicletype"
            name="vehicletype"
            value={values.vehicletype}
            onChange={handleInputChange}
          /> */}
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

export default PkgForm;