import React from "react";
import CountUp from "react-countup";
import Loading from "../../Loading.js";
import "./Card.css";

function Card({ data: { confirmed, deaths, lastUpdate, recovered } }) {
  if (!confirmed) {
    return <Loading />;
  }
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div
            className="card infected border-primary mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Infected</div>
            <div className="card-body text-primary">
              <h5 className="display-4">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={1.2}
                  separator=","
                />
              </h5>
              <p className="card-title">
                {`${new Date(lastUpdate).toDateString()} 
                ${new Date(lastUpdate).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })} (IST)`}
              </p>
              <p className="card-text">
                Number of People Infected from Covid-19
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 ">
          <div
            className="card recovered border-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Recovered</div>
            <div className="card-body text-success">
              <h5 className="display-4">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
                />
              </h5>

              <p className="card-title">
                {`${new Date(lastUpdate).toDateString()} 
                ${new Date(lastUpdate).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })} (IST)`}
              </p>
              <p className="card-text">
                Number of People Recovered from Covid-19
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 ">
          <div
            className="card deaths border-danger mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-header">Deaths</div>
            <div className="card-body text-danger">
              <h5 className="display-4">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.5}
                  separator=","
                />
              </h5>

              <p className="card-title">
                {`${new Date(lastUpdate).toDateString()} 
                ${new Date(lastUpdate).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                })} (IST)`}
              </p>
              <p className="card-text">
                Number of People Deaths caused by Covid-19
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
