import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DCTable from './DCTable';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

//Driver_Earning_And_Commission2
const Dricom = ({  }) => {
      const classes = useStyles();
       var [DricomObjects, setDricomObjects] = useState({});
      var num =1;
       useEffect(() => {
         fireDB
           .database()
           .ref()
           .child("Driver_Earning_And_Commission2")
           .on("value", (snapshot) => {
             if (snapshot.val() != null)
               setDricomObjects({
                 ...snapshot.val(),
               });
           });
       }, []);
    return (
      <React.Fragment>
           <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Driver Commission</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        <div >
          <div className="container">
            <h1 className="display-4 text-center">Driver Commission</h1>
          </div>
        </div>
     

        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
        
          </div>
        </div>
        <DCTable />
      </React.Fragment>
    );
}

export default Dricom;