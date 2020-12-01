import React, { useEffect, useState } from "react";
//import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactForm = (props) => {
  const Initialfieldval = {
    fullname: "",
    mobile: "",
    email: "",
    address: "",
  };
  var [values, setvalues] = useState(Initialfieldval);
  useEffect(() => {
    if (props.currentId == '')
      setvalues({
        ...Initialfieldval,
      });
    else
        setvalues({
          ...props.contactObjects[props.currentId],
        });
  }, [props.currentId, props.contactObjects]);
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
          placeholder="Full name"
          name="fullname"
          value={values.fullname}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i class="fas fa-mobile"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="mobile number"
          name="mobile"
          value={values.mobile}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="far fa-envelope"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="e-mail"
          name="email"
          value={values.email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-address-card"></i>
          </div>
        </div>
        <textarea
          className="form-control"
          placeholder="address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId==''?"save":"Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default ContactForm;
