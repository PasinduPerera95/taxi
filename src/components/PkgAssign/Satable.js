import React, { useState, useEffect } from 'react';
import { MDBDataTable } from 'mdbreact';
import fireDB from '../../firebase';

const Satable = () => {
        var [PkgasObjects, setPkgasObjects] = useState({});
          var [currentId, setcurrentId] = useState("");
var i =[];
var j =[];
var k=[];
var l=[];
var m=[];
var ii=0;
           useEffect(() => {
          fireDB.database().ref().child("packageassign").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setPkgasObjects({
                ...snapshot.val(),
              });
          });

 
        }, []);  
        ///
  


        ////

  var assignid;
    var customerphone;
    var driverid;
    var pkgid;
    var tripstatus;



  const data = {
    

    columns: [
      {
        label: 'assignid',
        field: 'assignid',
        sort: 'asc',
        width: 150
      },
      {
        label: 'customerphone',
        field: 'customerphone',
        sort: 'asc',
        width: 270
      },
      {
        label: 'driverid',
        field: 'driverid',
        sort: 'asc',
        width: 200
      },
      {
        label: 'pkgid',
        field: 'pkgid',
        sort: 'asc',
        width: 100
      },
      {
        label: 'tripstatus',
        field: 'tripstatus',
        sort: 'asc',
        width: 150
      },
      {
        label: 'update',
        field: 'update',
        sort: 'asc',
        width: 100
      },
            {
        label: 'delete',
        field: 'delete',
        sort: 'asc',
        width: 100
      },
    ],
         g:[ Object.keys(PkgasObjects).map((id) => {
  // key ={id}
      i[ii] =  `${PkgasObjects[id].assignid}`;
    j[ii]=  `${PkgasObjects[id].customerphone}`;
    k[ii]=    `${PkgasObjects[id].driverid}`;
    l[ii]= `${PkgasObjects[id].pkgid}`;
    m[ii]=    `${PkgasObjects[id].tripstatus}`;
    ii++;

    //  assignid =`${i}`;
    //       customerphone=`${j}`;
    //       driverid=`${k}`;
    //       pkgid=`${l}`;
    //       tripstatus=`${m}`;
    
    })
        //    for(let ee=0; ee<ii; ee++){
        //   {  
        //   assignid :`${i[ee]}`;
        //   customerphone:`${j[ee]}`;
        //   driverid:`${k[ee]}`;
        //   pkgid:`${l[ee]}`;
        //   tripstatus:`${m[ee]}`;
        // }
        // }

  ],

  dd:[
    {for( )
      {

    }}
  ],

   

     rows: [ 
        {  
          assignid :`${i[0]}`,
          customerphone:`${j[0]}`,
          driverid:`${k[0]}`,
          pkgid:`${l[0]}`,
          tripstatus:`${m[0]}`,
        },
        {  
          assignid :`${i[1]}`,
          customerphone:`${j[1]}`,
          driverid:`${k[1]}`,
          pkgid:`${l[1]}`,
          tripstatus:`${m[1]}`,
        },
        {  
          assignid :`${i[2]}`,
          customerphone:`${j[2]}`,
          driverid:`${k[2]}`,
          pkgid:`${l[2]}`,
          tripstatus:`${m[2]}`,
        },
        {
   
      },
        
                  ]
  
  //   rows :[Object.keys(PkgasObjects).map((id) => {
                 
  //               })]
    
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default Satable;