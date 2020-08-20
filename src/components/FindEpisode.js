import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../styles.css";

const FindEpisode = (props) => {
  const [name, setName] = useState();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchEpisodeByName("pilot");
  }, []);

  const fetchEpisodeByName = async (name) => {
    try {
      const res = await axios.get(
        `https://rickandmortyapi.com/api/episode/?name=${name}`
      );
      setError(false);
      let allRes = { ...res.data };
      setData(allRes.results[0]);
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  const setEpisodeName = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="text-monospace">
      <button className="btn btn-primary btn-lg btn-block">
        <Link to="/" className="text text-light">
          Find All The Episodes
        </Link>
      </button>
      <h1>Rick And Morty</h1>
      <input
        placeholder="Enter episode name"
        className="rounded border border-success col-md-6 pt-2 pb-2 pl-2 ml-2 px-4 col-lg-6 text-success"
        value={name}
        onChange={(event) => setEpisodeName(event)}
      />
      <button
        className="btn btn-success mt-3 ml-2 px-4 col-md-6"
        onClick={() => fetchEpisodeByName(name)}
      >
        GO
      </button>

      {error && (
        <div>
          <h2 className="text-uppercase rounded mx-auto mt-5 p-3 bg-danger col-md-6">
            Enter correct name!
          </h2>
        </div>
      )}
      <Card
        body
        inverse
        style={{ backgroundColor: "#FFA07A", borderColor: "#333" }}
      >
        <div className="text-center rounded border border-info col-md-6 mx-auto mt-5 pt-2 pb-2 pl-2 ml-2 px-4 col-lg-6">
          <h5 className="card-title">{data.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.episode}</h6>
          <p className="card-text mb-2">Air Date : {data.air_date}</p>
        </div>
      </Card>
    </div>
  );
};

export default FindEpisode;
