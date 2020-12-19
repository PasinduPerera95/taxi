import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import fireDB from "../../firebase";

const FTTable = ({  }) => {
    let approvedRows = [];
    var num =1;
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
        Object.keys(DriverTrackingObjects).map((id) => {
            approvedRows.push({
                 NUM:num++,
                 WC:DriverTrackingObjects[id].waitingcost,
                 SA:DriverTrackingObjects[id].startaddress,
                 DID:DriverTrackingObjects[id].driverid,
                 DT:DriverTrackingObjects[id].date,
                 EAD:DriverTrackingObjects[id].endaddress,
                 STT:DriverTrackingObjects[id].starttime,
                 STS:DriverTrackingObjects[id].status,
                 TDS:DriverTrackingObjects[id].totaldistance,
                 TCO:DriverTrackingObjects[id].tripcost,
                 TTI:DriverTrackingObjects[id].triptime,
                 WT:DriverTrackingObjects[id].waitingtime,
                 WC1:DriverTrackingObjects[id].waitingcost
            });
        });
        const data={
            columns:[
               {label:'Index',
                field:'NUM',
                sort:'asc',
                width:''},
               {label:'Waiting cost',
                field:'WC',
                sort:'asc',
                width:''},
               {label:'Trip Start Address',
                field:'SA',
                sort:'asc',
                width:''},
               {label:'Date',
                field:'DID',
                sort:'asc',
                width:''},
               {label:'Driver ID',
                field:'DT',
                sort:'asc',
                width:''},
               {label:'Trip End Address',
                field:'EAD',
                sort:'asc',
                width:''},
               {label:'Trip Start Time',
                field:'STT',
                sort:'asc',
                width:''},
               {label:'Trip Status',
                field:'STS',
                sort:'asc',
                width:''},
               {label:'Trip Total Distance',
                field:'TDS',
                sort:'asc',
                width:''},
               {label:'Trip cost',
                field:'TCO',
                sort:'asc',
                width:''},
               {label:'Trip Time',
                field:'TTI',
                sort:'asc',
                width:''},
               {label:'Waiting time',
                field:'WT',
                sort:'asc',
                width:''},
                {label:'Waiting Cost',
                field:'WC1',
                sort:'asc',
                width:''} 
            ],
            rows: approvedRows
        }
    return (
       <React.Fragment>
       <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="download-table-xls-button"
              table="table-to-xls"
              filename="Failed_trips"
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

export default FTTable;