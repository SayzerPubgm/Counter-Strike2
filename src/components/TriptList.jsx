import "./TriptList.css";
import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { NavLink } from "react-router-dom";
import "../i18n";
import { useTranslation } from "react-i18next";

function TriptList() {
  const url = "https://raw.githubusercontent.com/SayzerPubgm/data_cs2/main/public/data.json";
  const { data: tript, isPending, error } = useFetch(url);
  const { t, i18n } = useTranslation();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    if (tript) {
      setFilteredData(tript);
    }
  }, [tript]);

  const filterByCategory = (category) => {
    if (tript) {
      const filtered = tript.filter((trip) => trip.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div className="trip-list">
      <hr />
      {isPending && <h3>{t("loading")}</h3>}
      {error && <h2>{error}</h2>}
      <ul>
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((trip) => (
            <li key={trip.id}>
              <NavLink to={`/readmore/${trip.id}`}>
                <img src={trip.image} alt={trip.name} />
                <div className="details">
                  <h4>{trip.date}</h4>
                  <h2>{trip.name}</h2>
                  <p className="trip_desc">{trip.description}</p>
                  <NavLink to={`/readmore/${trip.id}`}>{t("readmore")}</NavLink>
                </div>
              </NavLink>
            </li>
          ))
        ) : (
          <p>{t("no_data")}</p> // Show a message if no data
        )}
      </ul>
      <div className="filters">
        <button onClick={() => filterByCategory("News")}>{t("news")}</button>
        <button onClick={() => filterByCategory("Updated")}>{t("update")}</button>
      </div>
    </div>
  );
}

export default TriptList;
