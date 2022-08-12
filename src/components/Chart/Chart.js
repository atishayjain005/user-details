import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
  const [state, setState] = useState([]);
  const [loader, setLoader] = useState(true);
  const labels = [];
  const content = [];

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

  state.forEach((data) => {
    labels.push(data.first_name);
    content.push(data.salary);
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: content,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(39,111,254,0.4)",
          "rgba(0,0,0,0.2)",
          "rgba(252,192,203,0.2)",
          "rgba(46,128,3,0.3)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(39,111,254,1)",
          "rgba(0,0,0,1)",
          "rgba(252,192,203,1)",
          "rgba(46,128,3,1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {!loader ? (
        <Pie data={data} />
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
