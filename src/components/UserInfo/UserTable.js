import React, { useState, useEffect } from "react";

export default function UserTable() {
  const [state, setState] = useState([]);
  const [loader, setLoader] = useState(true);

  const fetchData = () => {
    fetch(`./data.json`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setState(data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
      fetchData();
    }, 6000);
  }, []);

  return (
    <div>
      {!loader ? (
        <table className="table table-light border border-2 table-striped">
          <thead>
            <tr>
              <th>S.no.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {state.map((e, index) => {
              const { first_name, last_name, email, salary } = e;
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{first_name}</td>
                  <td>{last_name}</td>
                  <td>{email}</td>
                  <td>{salary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="d-flex py-5 justify-content-center text-center align-items-center">
          <div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
