import React, { useState, useEffect, Component, useRef } from "react";
import fireDB from "../../firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useReactToPrint } from "react-to-print";
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
       var [search,setsearch] = useState("");
        var num = 1;

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
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Trip History</h1>
        </div>
      </div>
      <div>
        <div className={classes.root}>
          <Button variant="contained" color="primary">
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
          </Button>
        </div>
      </div>
    
      <div className="row">
        <div className="col-md-0">
          {/* <DriverForm {...{ addOrEdit, currentId, HistoryObjects }} /> */}
        </div>
        <div className="col-md-12">
          <table
            className="table table-border table-stripped"
            id="table-to-xls"
          >
            <input type="text " name="search" id="search" placeholder="search" onChange={e=>setsearch(e.target.value)} class="form-cotrol" />
           
            <thead className="thread-light">
              <tr>
                {/* <th>customeremail</th>
                  <th>customermobile</th> */}
                <th>Index</th>
                <th>distanceapplication</th>
                <th>driverid</th>
                <th>endaddress</th>
                <th>paymentmethod</th>
                <th>startaddress</th>
                <th>tripcommission</th>
                <th>tripcost</th>
                <th>tripenddate</th>
                <th>tripendtime</th>
                <th>tripid</th>
                <th>tripstartdate</th>
                <th>tripstarttime</th>
                <th>triptime</th>
                <th>triptotalcost</th>
                <th>vouchercode</th>
                <th>waitingcost</th>
                <th>waitingtime</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(HistoryObjects).map((id) => {
                return (
                  <tr key={id}>
                    <td>{num++}</td>
                    {/* <td>{HistoryObjects[id].customeremail}</td>
                      <td>{HistoryObjects[id].customermobile}</td> */}
                    <td>{HistoryObjects[id].distanceapplication}</td>
                    <td>{HistoryObjects[id].driverid}</td>
                    <td>{HistoryObjects[id].endaddress}</td>
                    <td>{HistoryObjects[id].paymentmethod}</td>
                    <td>{HistoryObjects[id].startaddress}</td>
                    <td>{HistoryObjects[id].tripcommission}</td>
                    <td>{HistoryObjects[id].tripcost}</td>
                    <td>{HistoryObjects[id].tripenddate}</td>
                    <td>{HistoryObjects[id].tripendtime}</td>
                    <td>{HistoryObjects[id].tripid}</td>
                    <td>{HistoryObjects[id].tripstartdate}</td>
                    <td>{HistoryObjects[id].tripstarttime}</td>
                    <td>{HistoryObjects[id].triptime}</td>
                    <td>{HistoryObjects[id].triptotalcost}</td>
                    <td>{HistoryObjects[id].vouchercode}</td>
                    <td>{HistoryObjects[id].waitingcost}</td>
                    <td>{HistoryObjects[id].waitingtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Triphis;