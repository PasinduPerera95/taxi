import React, { useState, useEffect } from 'react';
import Divider from "@material-ui/core/Divider";
import DriverForm from "../driver/DriverForm";
import fireDB from "../../firebase";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Chart from "./Chart";
import Doughnut from 'react-chartjs-2';




const Home = ({ props }) => {
        var [DriverObjects, setDriverObjects] = useState({});
        var [vehicleObjects, setVehicleObjects] = useState({});
        var [CustomerObjects, setCustomerObjects] = useState({});
        var [DriverTrackingObjects, setDriverTrackingObjects] = useState({});
        var [PkgasObjects, setPkgasObjects] = useState({});
        var [currentId, setcurrentId] = useState("");
        var i =0;
        var j =0;
        var k =0;
        var l =0;
         var ii=0;
          var kk=0;
          var iii=0;
          var kkk=0;



        useEffect(() => {
          //drivers
          fireDB.database().ref().child("drivers").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setDriverObjects({
                ...snapshot.val(),
              });
          });
          //vehicles
              fireDB.database().ref().child("vehicle").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setVehicleObjects({
          ...snapshot.val(),
        });
    });

          //customers
              fireDB.database().ref().child("customers").on("value", (snapshot) => {
          if (snapshot.val() != null)
            setCustomerObjects({
              ...snapshot.val(),
            });
        });

        //ftrips..
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
         //pkg assigning...
         fireDB.database().ref().child("packageassign").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setPkgasObjects({
                ...snapshot.val(),
              });
          });


      //  {Object.keys(PkgasObjects).map((id) => {
                   
      //       if(PkgasObjects[id].tripstatus=='pending')
      //             ii++;
      //       else
      //       kk++;
      //           })}

         

        }, []);

        Object.keys(PkgasObjects).map((id) => { 
          iii++;       
            if(PkgasObjects[id].tripstatus=='pending')
                  ii++;
            else
           kk++;
                })

                Object.keys(vehicleObjects).map((id) => { 
                  kkk++;
                })

          const data={    
            
        labels:['Pending Trips','Finished trips'],
        datasets:[{
            label:'Sales for 2020 (M)',
            data:[ii,kk],
             borderColor:[
                 '#D53343',
                 '#FFC107'
                

             ],
             backgroundColor:[
            '#D53343',
            '#FFC107']
                    },
       ]
        
        


    }

      
 
    return (
       <React.Fragment >
            <nav aria-label="breadcrumb">
              <hide>  {Object.keys(DriverObjects).map((id) => {
                i++;
                  //return (  );

                })} </hide>
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">Home</a></li>
    <li className="breadcrumb-item"><a href="#">Library</a></li>
    <li className="breadcrumb-item active" aria-current="page">data</li>
  </ol>
</nav>
           
           
           <div className='row' >
               <div className='col'>
           <div className="card text-white bg-primary mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Driver Management</div>
  <div className="card-body">
    <div className="row">
      <div className="col-2">
        <EmojiPeopleIcon />
      </div>
      <div className="col-10">
           {/* <h5 className="card-title">Primary card title</h5> */}
              <h4>Number of drivers:-{i}</h4>
    
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Click Here
</button>
      </div>
    </div>
 
  </div>
  </div>
  </div>
  <div className="col">
  <div className="card text-white bg-success mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Vehicle Registration</div>
  <div className="card-body">
   <div className="row">
      <div className="col-2">
        <DriveEtaIcon />
      </div>
      <div className="col-10">
            <hide>  {Object.keys(vehicleObjects).map((id) => {
                j++;
                  //return (  );

                })} </hide>

 {/* {Object.keys(PkgasObjects).map((id) => {
                   
            if(PkgasObjects[id].tripstatus=='pending')
                  ii++;
            else
            kk++;
                })} */}


           {/* <h5 className="card-title">Primary card title</h5> */}
             <h4>Number of Vehicles:-{j}</h4>
  
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Click Here
</button>
      </div>
    </div>
  </div>
</div>
</div>
  <div className="col">
  <div className="card text-white bg-danger  mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Customers</div>
  <div className="card-body">
   <div className="row">
      <div className="col-2">
        <SupervisorAccountIcon />
      </div>
      <div className="col-10">
                <hide>  {Object.keys(CustomerObjects).map((id) => {
                k++;
                  //return (  );

                })} </hide>
           {/* <h5 className="card-title">Primary card title</h5> */}
                <h4>number of Customers:-{k} </h4>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Click Here
</button>
      </div>
    </div>
  </div>
</div>
</div>
  <div className="col">
  <div className="card text-white bg-warning  mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header">Failed Trips</div>
  <div className="card-body">
   <div className="row">
      <div className="col-2">
        <DriveEtaIcon />
      </div>
      <div className="col-10">
             <hide>  {Object.keys(DriverTrackingObjects).map((id) => {
                l++;
                  //return (  );

                })} </hide>
           {/* <h5 className="card-title">Primary card title</h5> */}
              <h4>Total Failed Trips:-{l}</h4>
        <button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">
  Click Here
</button>
      </div>
    </div>
  </div>
</div>
</div>
  </div>
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <div className="row">
   <div className="col">
        
     {/* <h4>Total trips :- 43</h4>
     <h4>Completed Trips :-{kk}
     </h4>
     <h4>pending Trips :-{ii}
     </h4> */}
<div class="card text-white bg-dark mb-3">
      <div class="card-header">Trips Summary</div>
  <div class="card-body">
    <h5 class="card-title">Total trips :- {iii}</h5>
    <h5 class="card-title">Completed Trips :-{kk}</h5>
    <h5 class="card-title">pending Trips :-{ii}</h5>

    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
   </div>
     <div className="chat col">
      <Doughnut data={data}/>
       </div>
  </div>
    <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <Divider />
  <div className="row">
     <div className="col">
 <Doughnut data={data}/>
     </div>
     <div className="col">
<div class="card text-white bg-dark mb-3">
      <div class="card-header">Assigned Vehicles</div>
  <div class="card-body">
    <h5 class="card-title">Total Vehicles:- {kkk}</h5>
    <h5 class="card-title">Assigned Vehicles :-{kk}</h5>
    <h5 class="card-title">pending  :-{ii}</h5>

    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  </div>
     </div>

  </div>

  

       </React.Fragment>
    );
}

export default Home;