import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, withRouter, useNavigate } from "react-router-dom";

function LogsIndex({}) {
    const [log, setLog] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then((res) => {
            setLog(res.data);
        })
        .catch(() => {
            navigate("/not-found");
        });
    }, [index, navigate]);

    // function backButton () {
    //     navigate("/logs")
    // }
// <a href={`/logs/${index}/edit`}>Edit</a>
  return (
    <div>
        <h1>Show</h1>
        <div>
            <p>{`${log["title"]} - By ${log["captainName"]}`}</p>
            <p>{`${log["post"]}`}</p>
            <p>{`Days since last crisis: ${log["daysSinceLastCrisis"]}`}</p>
        </div>
        <div>
            <button><Link to="/logs">Back</Link></button>
            <button><Link to={`/logs/${index}/edit`}>Edit</Link></button>
            <button><Link to="/logs">Delete</Link></button>
        </div>
    </div>
  )
}

export default LogsIndex