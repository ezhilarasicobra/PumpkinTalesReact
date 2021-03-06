import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Home = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  });

  return (
    <div id="showcase" style={{ margin: "0 -1rem" }}>
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">
              Pumpkin<span className="amber-text text-lighten-4">Tales</span>
            </h2>
            <p className="flow-text " style={{ color: "#D6C615" }}>
              Order Food From Your favourite Restaurant{" "}
            </p>
          </div>
          <div className="card-action">
            <div className="card-links">
              <button
                className="btn btn-large waves-effect waves-light "
                style={{ backgroundColor: "#86C232" }}
              >
                <Link to="/register" style={{ color: "white" }}>
                  Register
                </Link>
              </button>
              <button
        
                className="btn btn-large waves-effect "
                style={{ backgroundColor: "#86C232" }}
                
              >
                <Link to="/login" style={{ color: "white" }}>
                Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
