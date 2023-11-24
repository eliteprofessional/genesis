import React from "react";
import Header from "../Header";
import "./operations.css";
import { Link } from "react-router-dom";

const Operation = () => {
  return (
    <>
      <div className="head1">
        <div>
          <Header />
        </div>

        <div className="container gf ">
          <h4>Business operations and flows list</h4>
          <ul>
            <li className="jobop">
              <h5>Job Openings</h5>
            </li>
            <ul className="jobop">
              <li className="joboplink">
                <Link to="/operations/post-job-opening ">
                  <h6>Post Job Opening by Existing Client</h6>
                </Link>
              </li>

              <li className="joboplink">
                <Link to="/operations/profile-fillup-freelancer ">
                  <h6>Profile fill up by Existing Freelancer</h6>
                </Link>
              </li>

              <li className="joboplink">
                <Link to="/operations/profile-fillup-client-individual ">
                <h6>Profile fill up by Existing Client With Individual</h6>
                </Link>
              </li>
              <li className="joboplink">
                <Link to="/operations/profile-fillup-client-company ">
                <h6>Profile fill up by Existing Client With Company</h6>
                </Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Operation;
