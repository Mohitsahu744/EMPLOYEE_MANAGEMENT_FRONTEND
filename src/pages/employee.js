import React, { useEffect, useState } from "react";
let Base_URL_EMP = "https://companyemploye.onrender.com"


export const EmpAdd = () => {

  const [empName, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  const [joiningDate, setdate] = useState("");

  async function inserdataemp() {
    let empdata = { empName, mobile, city, address, joiningDate };
    console.warn(empdata);

    let output = await fetch(
      `${Base_URL_EMP}/api/company/employee/insert`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(empdata),
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
                    Add Employee Form
                  </h3>
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="S_id"
                            value={empName}
                            onChange={(e) => setname(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="S_id">
                            Employee Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="S_Name"
                            value={mobile}
                            onChange={(e) => setmobile(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="S_name">
                            Mobile
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
                            value={city}
                            onChange={(e) => setcity(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="firstName">
                            City
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="address"
                            id="contact"
                            value={address}
                            onChange={(e) => setaddress(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="contact" for="Owner_id">
                            Address
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            placeholder="YYYY-MM-DD"
                            id="city"
                            value={joiningDate}
                            onChange={(e) => setdate(e.target.value)}
                            className="form-control form-control-lg"
                          />
                          <label className="form-label" for="city">
                            Joining Date
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2 pt-2">
                      <button
                        onClick={inserdataemp}
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

function EmpModify() {


  const [data, setData] = useState([]);

  useEffect(() => {
    getuser();
  }, []);
  function getuser() {
    fetch(`${Base_URL_EMP}/api/company/employee/display_all_data`).then(
      (result) => {
        result.json().then((res) => {
          console.warn("result", res);
          setData(res.response);
        });
      }
    );

  }
  console.warn(data);

  function deletedataemp(empid) {
    fetch(`${Base_URL_EMP}/api/company/employee/delete-data/${empid}`, {
      method: "DELETE"
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);
        getuser();
      })
    })
  }
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
            <th>Operations</th>

          </tr>
        </thead>
        {data.map((items,i) =>
          <tbody key={i}>          <tr>
            <td>{items.empid}</td>
            <td>{items.empName}</td>
            <td>{items.mobile}</td>
            <td>{items.city}</td>
            <td>{items.address}</td>
            <td>{items.joiningDate}</td>
            <td> <button className="btn btn-light" onClick={() => deletedataemp(items.empid)}>Delete</button> </td>
            {/* <td> <button  className="btn btn-light">Update</button> </td> */}
          </tr>

          </tbody>

        )}
      </table>


    </div>
  );
}

function EmpView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${Base_URL_EMP}/api/company/employee/display_all_data`).then(
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
      {data.map((value, index) => {
        return (
          <Card1
            Empid={value.empid}
            EmpName={value.empName}
            Mobile={value.mobile}
            City={value.city}
            Address={value.address}
            JoiningDate={value.joiningDate}
          />
        );
      })}
    </div>
  );
}

function Card1(props) {
  return (
    <div style={{ color: "gold", margin: "20px" }}>
      <div
        className="card"
        style={{
          width: "300px",
          backgroundColor: "black",
          boxShadow: "5px 5px 12px magenta",
          borderRadius: "10px 40px",
          marginLeft: "25%"

        }}
      >
        <div className="card-body " >
          <h5
            style={{ textAlign: "center", fontWeight: "600", color: "white" }}
            className="card-title"
          >
            {"EmpID:" + " " + props.Empid}
          </h5>
          <h5 className="card-title ">{"Emp_Name:-" + " " + props.EmpName}</h5>
          <h5 className="card-title">{"mobile:-" + " " + props.Mobile}</h5>
          <h5 className="card-title">{"city:-" + "  " + props.City}</h5>
          <h5 className="card-title">{"address:-" + " " + props.Address}</h5>
          <h5 className="card-title">{"joiningDate:-" + " " + props.JoiningDate}</h5>
        </div>
      </div>
    </div>
  );
}

export { EmpView, Card1, EmpModify };
