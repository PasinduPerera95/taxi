import React, { useState, useEffect } from "react";
import fireDB from "../../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

        <div className={classes.root}>
          <Button variant="contained" color="primary">
            PDF
          </Button>
          <Button variant="contained" color="secondary">
            CSV
          </Button>
            <Button color="primary" variant="contained">
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="Fail_trips"
              sheet="tablexls"
              buttonText="Excel-Report"
            />
          </Button>
        </div>

        <div className="row">
          <div className="col-md-0"></div>
          <div className="col-md-12">
            <table className="table table-border table-stripped" id="table-to-xls">
              <thead className="thread-light">
                <tr>
                  <th>No</th>
                  <th>Trip Start Address</th>
                  <th>Driver ID</th>
                  <th>Date</th>
                  <th>Trip End Address</th>
                  <th>Trip Start Time</th>
                  <th>Trip Status</th>
                  <th>Trip Total Distance</th>
                  <th>Trip Cost</th>
                  <th>Trip Time</th>
                  <th>Waiting time</th>
                  <th>Waiting Cost</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(DriverTrackingObjects).map((id) => {
                  return (
                    <tr key={id}>
                      {/* <td>{DriverTrackingObjects[id]}</td> */}
                      <td>{DriverTrackingObjects[id].Location.waitingcost}</td>
                      <td>{DriverTrackingObjects[id].Location.startaddress}</td>
                      <td>{DriverTrackingObjects[id].Location.driverid}</td>
                      <td>{DriverTrackingObjects[id].Location.date}</td>
                      <td>{DriverTrackingObjects[id].Location.endaddress}</td>
                      <td>{DriverTrackingObjects[id].Location.starttime}</td>
                      <td>{DriverTrackingObjects[id].Location.status}</td>
                      <td>
                        {DriverTrackingObjects[id].Location.totaldistance}
                      </td>
                      <td>{DriverTrackingObjects[id].Location.tripcost}</td>
                      <td>{DriverTrackingObjects[id].Location.triptime}</td>
                      <td>{DriverTrackingObjects[id].Location.waitingtime}</td>
                      <td>{DriverTrackingObjects[id].Location.waitingcost}</td>
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

export default Ftrips;