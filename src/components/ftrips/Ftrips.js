import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FTTable from './FTTable';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));



const Ftrips = ({  }) => {
     const classes = useStyles();
     var [DriverTrackingObjects, setDriverTrackingObjects] = useState({});
     var num=1;
     useEffect(() => {
       fireDB
         .database()
         .ref()
         .child("DriverTracking")
         .on("value", (snapshot) => {
           if (snapshot.val() != null)
             setDriverTrackingObjects({
               ...snapshot.val(),
             });
         });
     }, []);
    return (
      <React.Fragment>
              <nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Failed Trips</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Failed Trips</h1>
          </div>
          {/* <div className={classes.root}>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
          </div> */}
        </div>

        

        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
         
          </div>
        </div>
        <FTTable />
      </React.Fragment>
    );
}

export default Ftrips;