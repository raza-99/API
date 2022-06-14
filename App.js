import { useEffect,useState} from "react";
import APIcalls from "./Api-calls";

import Error from "./Error";
import "./App.css"
function App() {
  const [data,setdata]=useState([]);
  const [status,setstatus]=useState();
  const [loading,setloading]=useState(false);
  
useEffect(()=>{
  setloading(true);
APIcalls("GET").then((response)=>{
  setloading(false);
  console.log(response.status);
  console.log(response.data);
  setdata(response.data);
  setstatus(response.status);

});

},[])



const list=data.map((dt)=>

  <tr key={dt.id}>
    <th>{dt.id}</th>
    <th>{dt.employee_name}</th>
    <th>{dt.employee_salary}</th>
    <th>{dt.employee_age}</th>
    
  </tr>
)


  return (
  
      <div>
        
    
{ status=="success"?
<table style={{ width:"100%"}}>
  <tr>
  <th>ID</th>
    <th>Employee Name</th>
    <th>Employee Salary</th>
    <th>Employee Age</th>
  

  </tr>
 {
  list

 }
  
</table>: <Error/>
}
 </div>    

   
  );
}

export default App;
