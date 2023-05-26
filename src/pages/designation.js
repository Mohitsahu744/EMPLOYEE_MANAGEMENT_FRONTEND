import React, { useEffect, useState } from "react";
let Base_URL_DES = "https://companydesignation.onrender.com"

export const DesigAdd = () => {
  
  const [empid, setid] = useState("");
  const [designation, setdesig] = useState("");
  const [department, setdepartment] = useState("");
 

  async function inserdatadesig() {
    let desigdata = {  empid, designation, department };
    console.warn(desigdata);

    let output = await fetch(
      `${Base_URL_DES}/api/company/designation/insert`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(desigdata),
      }
    );
    output = await output.JSON();
    console.warn(output);
  }

  return (
    <div>
      <section className="vh-50 gradient-custom ">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div
              className="col-12 col-lg-9 col-xl-7"
              style={{
                borderradius: "15px",
                boxShadow: " 5px 5px 50px magenta",
                border: "5px solid magenta",
                padding: "30px",
              }}
            >
              <div
                className="card shadow-10-strong card-registration"
                style={{ backgroundColor: "black" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3
                    className="mb-4 pb-2 pb-md-0 mb-md-5"
                    style={{ textAlign: "center" }}
                  >
                    Add Designation Form
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="S_id"
                            value={empid}
                            onChange={(e) => setid(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" >
                            Employee id
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="S_Name"
                            value={designation}
                            onChange={(e) => setdesig(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label">
                            Designation
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="Owner_id"
                            value={department}
                            onChange={(e) => setdepartment(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" >
                            Department
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2">
                      <button
                        onClick={inserdatadesig}
                        className="btn btn-warning btn-lg"
                        type="submit"
                        style={{
                          padding: "7px",
                          width: "60px",
                          color: "black",
                        }}
                      >
                        save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function DesigModify() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getuser();
  }, []);
  function getuser(){
    fetch(`${Base_URL_DES}/api/company/designation/display_all_data`).then(
      (result) => {
        result.json().then((res) => {
          console.warn("result", res);
          setData(res.response);
        });
      }
    );
    }
  console.warn(data);
  function deletedataemp(empid){
    fetch(`${Base_URL_DES}/api/company/designation/delete-data/${empid}`,{
      method:"DELETE"
    }).then((result)=>{
      result.json().then((res)=>{
        console.warn(res);
        getuser();
      })
    })
  }
  return (
    <div style={{  textAlign: "center", margin: "auto" }}>
      <table
        border="2px"
        className="table table-bordered"
        style={{ color: "gold" }}
      >
        <thead>
          <tr>
            <th >Empid</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Operations</th>
          </tr>
        </thead>
        {data.map((items) => (
          <tbody>    
                  <tr>
            <td>{items.empid}</td>
            <td>{items.designation}</td>
            <td>{items.department}</td>
            <td> <button  className="btn btn-light" onClick={()=>deletedataemp(items.empid)}>Delete</button> </td>
            </tr>
         
          </tbody>

        ))}
      </table>

    
    </div>
  );
}


function DesigView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${Base_URL_DES}/api/company/designation/display_all_data`).then(
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
    <div className="d-flex flex-wrap  justify-Content-center ">
      {data.map((value,index) => {
        return (
          <Card 
            Empid={value.empid}
            desig={value.designation}
            department={value.department}
           
          />
        );
      })}
    </div>
  );
}

function Card(props) {
  return (
    <div style={{ color: "gold", margin: "20px" }}>
      <div
        className="card"
        style={{
          width: "300px",
          backgroundColor: "black",
          boxShadow: "5px 5px 12px magenta",
          borderRadius: "10px 40px",
          marginLeft: "25%",
        }}
      >
        <div className="card-body " >
          <h5
            style={{ textAlign: "center", fontWeight: "600",color:"white" }}
            className="card-title"
          >
            { "EmpID:" +" "+ props.Empid}
          </h5>
          <h5 className="card-title ">{"Designation:-" + " "+ props.desig }</h5>
          <h5 className="card-title">{"Department:-" + " " + props.department}</h5>
           </div>
      </div>
    </div>
  );
}

export { DesigView, Card, DesigModify };
