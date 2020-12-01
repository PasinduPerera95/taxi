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

//Driver_Earning_And_Commission2
const Dricom = ({  }) => {
      const classes = useStyles();
       var [DricomObjects, setDricomObjects] = useState({});
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
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">Driver Commission</h1>
          </div>
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
              filename="Driver_Commission"
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
                  <th>Balance</th>
                  <th>Date</th>
                  <th>Driver ID</th>
                  <th>Paidcommission</th>
                  <th>Totalcommission</th>
                  <th>Totalearning</th>
             
                </tr>
              </thead>
              <tbody>
                {Object.keys(DricomObjects).map((id) => {
                  return (
                    <tr key={id}>
                      
                      <td>{DricomObjects[id].balance}</td>
                      <td>{DricomObjects[id].date}</td>
                      <td>{DricomObjects[id].driverid}</td>
                      <td>{DricomObjects[id].paidcommission}</td>
                      <td>{DricomObjects[id].totalcommission}</td>
                      <td>{DricomObjects[id].totalearning}</td>
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

export default Dricom;