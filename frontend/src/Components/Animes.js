import React, { useEffect, useState } from "react";
import Anime from "./Anime";
import axios from "axios";

function Animes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchAnimes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/animes`);
        setAnimes(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimes();
  }, [API]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="index" id="anime-list">
      {animes.length > 0 ? (
        animes.map((anime) => (
          <Anime key={anime.id} name={anime.name} description={anime.description} />
        ))
      ) : (
        <p>No animes to display</p>
      )}
    </section>
  );
}

export default Animes;
