import React, { useEffect, useState } from "react";
const VehicleForm = (props) => {
  const Initialfieldval = {
    charges: "",
    engineno: "",
    name: "",
    plateno: "",
    vchassyno: "",
    vdidname: "",
    vdname: "",
    vehicletype: "",
  };
  var [values, setvalues] = useState(Initialfieldval);
  useEffect(() => {
    if (props.currentId == "")
      setvalues({
        ...Initialfieldval,
      });
    else
      setvalues({
        ...props.vehicleObjects[props.currentId],
      });
  }, [props.currentId, props.vehicleObjects]);
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
      <div className="row">
      <div className="col">
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
      </div>
      <div className="col">
          <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="engineno"
          name="engineno"
          value={values.engineno}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div clasName="col">
             <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div clasName="col">
         <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="plateno"
          name="plateno"
          value={values.plateno}
          onChange={handleInputChange}
        />
      </div>
      </div>
      </div>
      <div className="row">
     <div className="col">
           <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="vchassyno"
          name="vchassyno"
          value={values.vchassyno}
          onChange={handleInputChange}
        />
      </div>
     </div>
      <div className="col">
          <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="vdidname"
          name="vdidname"
          value={values.vdidname}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div clasName="col">
         <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="vdname"
          name="vdname"
          value={values.vdname}
          onChange={handleInputChange}
        />
      </div>
      </div>
      <div clasName="col">
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

      </div>
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
};

export default VehicleForm;
