  
 import React, { useEffect, useState } from 'react';

 export function IndiaDate() {
   const [currentTime, setCurrentTime] = useState(new Date());
 
   useEffect(() => {
     // Set interval to update the time every second
     const interval = setInterval(() => {
       setCurrentTime(new Date());
     }, 1000); // 1000 milliseconds = 1 second
 
     // Cleanup the interval on component unmount
     return () => clearInterval(interval);
   }, []);


  // Extract day, month, and year
  const day = currentTime.getDate(); // Day of the month (1-31)
  const month = currentTime.getMonth() + 1; // Month (0-11, so add 1 for 1-12)
  const year = currentTime.getFullYear(); // Full year (e.g., 2024)
  // const month = String(currentTime.getMonth() + 1).padStart(2, '0');
  // const day = String(currentTime.getDate()).padStart(2, '0');
 
   return (
     <>
       <div className='d-flex '>
       
            
        <p className="fs-1 fw-bold mx-4   date">
           {day} 
        </p>
        <p className="fs-1 fw-bold mx-4   date">
         {month}
        </p>
        <p className="fs-1 fw-bold mx-4   date">
         {year}
        </p>
          
       </div>
     </>
   );
 }
 
// export function Indiatime (){
//     let today  = new Date ();



    
//     return(
//         <><div> <center><p className="fs-4 text"> This is the current time: {today.toLocaleTimeString()}{" "}{today.toLocaleDateString()}</p></center> </div>
        
        
        
        
//         </>
//     )




// };
