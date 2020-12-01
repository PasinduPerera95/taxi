import React, { useEffect, useState } from "react";

const CustomerForm = (props) => {
      const Initialfieldval = {
        fullname: "",
        mobile: "",
        email: "",
        address: "",
      };
      var [values, setvalues] = useState(Initialfieldval);
       useEffect(() => {
         if (props.currentId == "")
           setvalues({
             ...Initialfieldval,
           });
         else
           setvalues({
             ...props.CustomerObjects[props.currentId],
           });
       }, [props.currentId, props.CustomerObjects]);
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
            placeholder="address"
            name="address"
            value={values.address}
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
            placeholder="email"
            name="email"
            value={values.email}
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
            placeholder="mobile"
            name="mobile"
            value={values.mobile}
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
            placeholder="name"
            name="name"
            value={values.name}
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

export default CustomerForm;