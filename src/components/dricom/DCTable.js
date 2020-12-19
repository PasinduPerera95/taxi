import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import fireDB from "../../firebase";

const DCTable = ({  }) => {
      let approvedRows = [];
    var num =1;
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

 Object.keys(DricomObjects).map((id) => {
     approvedRows.push({
         NUM:num++,
         BAL:DricomObjects[id].balance,
         DAT:DricomObjects[id].date,    
         DID:DricomObjects[id].driverid,
         PCOM:DricomObjects[id].paidcommission,
         TCOM:DricomObjects[id].totalcommission,
         TEN:DricomObjects[id].totalearning
     })
 })




       const data={
           columns:[
                 {label:'Index',
                field:'NUM',
                sort:'asc',
                width:''},
                {label:'Balance',
                field:'BAL',
                sort:'asc',
                width:''},
                {label:'Date',
                field:'DAT',
                sort:'asc',
                width:''},
                {label:'Driver ID',
                field:'DID',
                sort:'asc',
                width:''},
                {label:'Paidcommission',
                field:'PCOM',
                sort:'asc',
                width:''},
                {label:'Totalcommission',
                field:'TCOM',
                sort:'asc',
                width:''},
                {label:'Totalearning',
                field:'TEN',
                sort:'asc',
                width:''},
           ],
           rows:approvedRows
       }

    return (
              <React.Fragment>
       <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="Driver_commision"
              sheet="tablexls"
              buttonText="Excel-Report"
            />
    <MDBDataTable
    id="table-to-xls"
      striped
      bordered
      small
      data={data}
    />
    </React.Fragment>
    );
}

export default DCTable;