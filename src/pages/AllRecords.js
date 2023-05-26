import React,{useState, useEffect} from "react";
let Base_URL_DES = "https://companydesignation.onrender.com"

function AllRecords() {
    const [data, setData] = useState([]);
  
    useEffect(() => { 
      fetch(`${Base_URL_DES}/api/company/designation/display_all_data/join`).then(
        (result) => {
          result.json().then((res) => {
            console.warn("result", res);
            setData(res.response);
          });
        }
      );
    }, []);
  
    console.warn(data);
    return (
      <div style={{ textAlign: "center", margin: "auto" }}>
      
     
        <table
          border="2px"
          className="table table-bordered"
          style={{ color: "gold" }}
        >
          <thead>
            <tr>
              <th >Empid</th>
              <th>EmpName</th>
              <th>Mobile</th>
              <th>City</th>
              <th>Address</th>
              <th>Joining_Date</th>
              <th>Designation</th>
              <th>Department</th>
             
            </tr>
          </thead>
          {data.map((items) => (
            <tbody>          <tr>
              <td>{items.empid}</td>
              <td>{items.empName}</td>
              <td>{items.mobile}</td>
              <td>{items.city}</td>
              <td>{items.address}</td>
              <td>{items.joiningDate}</td> 
              <td>{items.designation}</td>
              <td>{items.department}</td> 
              {/* <td> <button  className="btn btn-light">Delete</button> </td>
              <td> <button  className="btn btn-light">Update</button> </td> */}
            </tr>
           
            </tbody>
  
          ))}
        </table>
  
      
      </div>
    );
  }
  export {AllRecords}