import React, { useState, useEffect } from 'react';
import Doughnut from 'react-chartjs-2';
import fireDB from '../../firebase';

const Chart = ({ props }) => {

 var [PkgasObjects, setPkgasObjects] = useState({});
          var [currentId, setcurrentId] = useState("");
             var ii;
          var kk;
        
  


         useEffect(() => {
          fireDB.database().ref().child("packageassign").on("value", (snapshot) => {
            if (snapshot.val() != null)
              setPkgasObjects({
                ...snapshot.val(),
              });
          });
            

        // Object.keys(PkgasObjects).map((id) => {
        //             ii++;
        //     if(PkgasObjects[id].tripstatus=='pending')
        //           i=6;
        //     else
        //     k++;
        //         });



        }, []);
 

       const data={    
        labels:['Pending Trips','Finished trips'],
        datasets:[{
            label:'Sales for 2020 (M)',
            data:[2,4],
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
        <React.Fragment>
        <div>
                {/* {Object.keys(PkgasObjects).map((id) => {
                   
            if(PkgasObjects[id].tripstatus=='pending')
                  i++;
            else
            k++;
                })} */}
            <Doughnut data={data}/>
        </div>
        </React.Fragment>
    );
}

export default Chart;