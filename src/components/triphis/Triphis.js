import React, { useState, useEffect, Component, useRef } from "react";
import fireDB from "../../firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useReactToPrint } from "react-to-print";
import HisTable from './HisTable';
//import Seract from"./search";
//import search from "./search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));


const Triphis = ({  }) => {
  const componentRef = useRef();
   const classes = useStyles();
        var [HistoryObjects, setHistoryObjects] = useState({});
        var [currentId, setcurrentId] = useState("");
       var [search,setsearch] = useState(null);
        var num = 1;
        const setSearcgHandler  = (event) =>{setsearch(event.target.value)}
        //////////











        /////////////////

       console.log(search);
         useEffect(() => {
         var db =   fireDB
             .database()
             .ref()
             .child("History")
             .on("value", (snapshot) => {
               if (snapshot.val() != null)
                 setHistoryObjects({
                   ...snapshot.val(),
                 });
             });

             console.log(`variable value is :-${fireDB
             .database()
             .ref()
             .child("History")
             .on("value", (snapshot) => {
               if (snapshot.val() != null)
                 setHistoryObjects({
                   ...snapshot.val(),
                 });
             })}`);
         }, []);
         
    

  return (
    <React.Fragment>
         <nav aria-label="breadcrumb">
  <ul className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Trip History</a></li>
    <li className="breadcrumb-item active" aria-current="page">Data</li>
  </ul>
</nav>
{/* className="jumbotron jumbotron-fluid" */}
      <div >
        <div className="container">
          <h1 className="display-4 text-center">Trip History</h1>
        </div>
      </div>
      <div>
        <div className={classes.root}>
          {/* <Button variant="contained" color="primary">
            PDF
          </Button>
          <Button variant="contained" color="secondary">
            CSV
          </Button>
          <Button variant="contained" color="secondary">
            Excel
          </Button>
          <Button color="primary" variant="contained">
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="trip_history"
              sheet="tablexls"
              buttonText="Excel-Report"
            />
          </Button> */}
        </div>
      </div>
    
      <div className="row">
        <div className="col-md-0">
          {/* <DriverForm {...{ addOrEdit, currentId, HistoryObjects }} /> */}
        </div>
        <div className="col-md-12">
          <hide>
         
          </hide>
        </div>
      </div>
      <HisTable />
    </React.Fragment>
  );
}

export default Triphis;