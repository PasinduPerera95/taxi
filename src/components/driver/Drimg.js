import React, { useState, useEffect } from "react";

//comoponent for upload images....
const Drimg = ({  }) => {

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



    // const history = useHistory();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    //const [image, setImage] = useState("");
    
    const[loading,setLoading] = useState(false)
    const[image,setImage] =useState("")

var [values, setvalues] = useState(Initialfieldval);
     const handleInputChange = (e) => {
    var { name, value } = e.target;
    setvalues({
      ...values,
      [name]: value,
    });
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


    }

          //  const postDetails = () => {
          //    const data = new FormData();
          //    data.append("file", image);
          //    data.append("upload_preset", "new-insta"); //new-insta
          //           data.append("cloud_name", "deez2bddk");
          //              fetch("https://api.cloudinary.com/v1_1/deez2bddk/image/upload", {
          //                method: "post",
          //               body: data,
          //              })
          //                .then((res) => res.json())
          //                .then((data) => {
          //                 // setUrl(data.url);
          //                 console.log(data);
          //                })
          //                .catch((err) => {
          //                  console.log(err);
          //                });
          //  };


    return (
      <React.Fragment>
        <label> Upload Driver`s Image and NIC Image</label>
        <div className="row">
            <div className="col">
          <label>1.Profile</label>
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
          />
        </div>
            <div className="col">
          <label>1.NIC </label>
          <input
            type="file"
            name="file"
            placeholder="Upload an image"
            onChange={uploadImage}
          />
        </div>
        </div>
      
    
      </React.Fragment>
    );
}

export default Drimg;