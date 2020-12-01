import React, { useEffect, useState } from "react";
import Drimg from "./Drimg";




const DriverForm = (props) => {
  const[loading,setLoading] = useState(false)
  const Initialfieldval = {
    accountno: "",
    age: "",
    bankname: "",
    daddress: "",
    dbirthday: "",
    dimage: "",
    dlno: "",
    dmiddlename: "",
    dname: "",
    email: "",
    gender: "",
    index: "",
      img1:"",
    img2:"",
  };
  var i=1;
  {
    Object.keys(props.DriverObjects).map((id) => {
      return i++;
    });
  }

  var [values, setvalues] = useState(Initialfieldval);
  useEffect(() => {
    if (props.currentId == "")
      setvalues({
        ...Initialfieldval,
      });
    else
      setvalues({
        ...props.DriverObjects[props.currentId],
      });
  }, [props.currentId, props.DriverObjects]);
  const handleInputChange = (e) => {
    values.index = i;
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


      const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file',files[0])
      data.append("upload_preset", "insta-clone");
      setLoading(true)

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/deez2bddk/image/upload",{
          method:'POST',
          body:data
        }
      )
      const file = await res.json()
      console.log(file);
      console.log('Need to get this :-'+file.url);
      values.img1 = file.url;
      if(Boolean(values.img2))
      {values.img2 =file.url;}


    }

    const Assvalue=()=>{
      
    }

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
              placeholder="accountno"
              name="accountno"
              value={values.accountno}
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
              placeholder="age"
              name="age"
              value={values.age}
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
              placeholder="bankname"
              name="bankname"
              value={values.bankname}
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
              placeholder="daddress"
              name="daddress"
              value={values.daddress}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {/* //////////// */}
      <div className="row">
        <div className="col">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input
              type="date"
              className="form-control"
              placeholder="dbirthday"
              name="dbirthday"
              value={values.dbirthday}
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
              placeholder="dlno"
              name="dlno"
              value={values.dlno}
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
              placeholder="dmiddlename"
              name="dmiddlename"
              value={values.dmiddlename}
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
              placeholder="dname"
              name="dname"
              value={values.dname}
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
              placeholder="email"
              name="email"
              value={values.email}
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
              placeholder="gender"
              name="gender"
              value={values.gender}
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
              placeholder="index"
              name="index"
              // value={values.index}
              value={i}
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
              placeholder="mobile"
              name="mobile"
              value={values.mobile}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      {/*  */}
      {/* <div className="row">
          <div className="col">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <input
                type="file"
                className="form-control"
                placeholder="dimage"
                name="dimage"
                value={values.dimage}
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
              type="file"
              className="form-control"
              placeholder="nicimage"
              name="nicimage"
              value={values.nicimage}
              onChange={handleInputChange}
            />
          </div>
        </div>
       
        </div> */}
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
          placeholder="nicno"
          name="nicno"
          value={values.nicno}
          onChange={handleInputChange}
        />
      </div>
            </div>
              <div className="col"><div className="form-group input-group">
                   <div className="row">
            <div className="col">
          <label>1.Profile</label>
          <input
            type="file"
            name="file1"
            placeholder="Upload an image"
            onChange={uploadImage}
            values={values.img1}
          />
        </div>
            <div className="col">
          <label>1.NIC </label>
          <input
            type="file"
            name="file2"
            placeholder="Upload an image"
            onChange={uploadImage}
            values={values.img2}
          />
        </div>
        </div>
                {/* <Drimg /> */}
                </div></div>

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

export default DriverForm;