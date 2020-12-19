import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import fireDB from "../../firebase";

const HisTable = ({  }) => {

let approvedRows = [];
var [HistoryObjects, setHistoryObjects] = useState({});
var num =1;
useEffect(()=>{
     fireDB
             .database()
             .ref()
             .child("History")
             .on("value", (snapshot) => {
               if (snapshot.val() != null)
                 setHistoryObjects({
                   ...snapshot.val(),
                 });
             });
},[])


var a;
var b;
   Object.keys(HistoryObjects).map((id) => {
          
                       approvedRows.push({
                      NUM:num++,
                      DIS:HistoryObjects[id].distanceapplication,
                      DRI:HistoryObjects[id].driverid,
                      END:HistoryObjects[id].endaddress,
                      PAY:HistoryObjects[id].paymentmethod,
                      STA:HistoryObjects[id].startaddress,
                      TRI:HistoryObjects[id].tripcommission,
                      TRI1:HistoryObjects[id].tripcost,
                      TRI2:HistoryObjects[id].tripenddate,
                      TRI3:HistoryObjects[id].tripendtime,
                      TRI4:HistoryObjects[id].tripid,
                      TRI5:HistoryObjects[id].tripstartdate,
                      TRI6:HistoryObjects[id].tripstarttime,
                      TRI7:HistoryObjects[id].triptime,
                      TRI8:HistoryObjects[id].triptotalcost,
                      VOU:HistoryObjects[id].vouchercode,
                      WAI:HistoryObjects[id].waitingcost,
                      WAI2:HistoryObjects[id].waitingtime

                       })
                 
                })


        const data= {
            columns:[
                {label:'Index',
                field:'NUM',
                sort:'asc',
                width:''},

                   {label:'Distanceapplication',
                field:'DIS',
                sort:'asc',
                width:''},
                   {label:'DriverID.',
                field:'DRI',
                sort:'asc',
                width:''},
                   {label:'Endaddress',
                field:'END',
                sort:'asc',
                width:''},
                   {label:'Paymentmethod',
                field:'PAY',
                sort:'asc',
                width:''},
                   {label:'Startaddress',
                field:'STA',
                sort:'asc',
                width:''},
                   {label:'Tripcommission',
                field:'TRI',
                sort:'asc',
                width:''},
                   {label:'Tripcost',
                field:'TRI1',
                sort:'asc',
                width:''},
                   {label:'Tripenddate',
                field:'TRI2',
                sort:'asc',
                width:''},
                   {label:'Tripendtime',
                field:'TRI3',
                sort:'asc',
                width:''},
                   {label:'Tripid',
                field:'TRI4',
                sort:'asc',
                width:''},
                       {label:'Tripstartdate',
                field:'TRI5',
                sort:'asc',
                width:''},
                       {label:'Tripstarttime',
                field:'TRI6',
                sort:'asc',
                width:''},
                     {label:'triptime',
                field:'TRI7',
                sort:'asc',
                width:''},


                       {label:'Triptotalcost',
                field:'TRI8',
                sort:'asc',
                width:''},
                       {label:'Vouchercode',
                field:'VOU',
                sort:'asc',
                width:''},
                       {label:'Waitingcost',
                field:'WAI',
                sort:'asc',
                width:''},
                        {label:'Waitingtime',
                field:'WAI2',
                sort:'asc',
                width:''},

            ],

            rows: approvedRows

        };

    return (
       <React.Fragment>
       <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="trip_history"
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

export default HisTable;