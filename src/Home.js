import React, { useState, useEffect } from "react";
import "./Home.css";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import { InfoBox } from "./Components/InfoBox/InfoBox";
import { Map } from "./Components/Map/Map";
import { Table } from "./Components/Table/Table";
import { sortData, prettyPrintStat } from "./Components/util";
import LineGraph from "./Components/LineGraph/LineGraph";
import "leaflet/dist/leaflet.css";
import { selectDarkmode, setDarkMode } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const darkmode = useSelector(selectDarkmode);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countries);
          setTableData(sortedData);
          setMapCountries(data);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countrycode = e.target.value;
    setCountry(countrycode);

    const url =
      countrycode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countrycode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countrycode);
        setCountryInfo(data);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h2
            className={
              darkmode === true ? "darkapp__header" : "lightapp__header"
            }
          >
            DASHBOARD
          </h2>
          <FormControl
            className={
              darkmode === true ? "darkapp__dropdown" : "app__dropdown"
            }
          >
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
              style={
                darkmode === true ? { color: "white" } : { color: "black" }
              }
            >
              <MenuItem
                className={
                  darkmode === true
                    ? "darkapp__menudropdown"
                    : "app__menudropdown"
                }
                value="worldwide"
              >
                Worldwide
              </MenuItem>
              {countries?.map((country) => (
                <MenuItem
                  className={
                    darkmode === true
                      ? "darkapp__menudropdown"
                      : "app__menudropdown"
                  }
                  value={country.value}
                >
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
          <InfoBox
            isRed
            active={casesType === "cases"}
            onClick={(e) => setCasesType("cases")}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo.todayCases)}
            total={prettyPrintStat(countryInfo.cases)}
            mode={darkmode}
          />

          <InfoBox
            active={casesType === "recovered"}
            onClick={(e) => setCasesType("recovered")}
            title="Recovered"
            cases={prettyPrintStat(countryInfo.todayRecovered)}
            total={prettyPrintStat(countryInfo.recovered)}
            mode={darkmode}
          />

          <InfoBox
            isRed
            active={casesType === "deaths"}
            onClick={(e) => setCasesType("deaths")}
            title="Deaths"
            cases={prettyPrintStat(countryInfo.todayDeaths)}
            total={prettyPrintStat(countryInfo.deaths)}
            mode={darkmode}
          />
        </div>
        <Map
          casesType={casesType}
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>

      <Card className={darkmode === true ? "darkapp__right" : "app__right"}>
        <CardContent>
          <h3
            style={darkmode === true ? { color: "white" } : { color: "black" }}
          >
            Live Cases by Country
          </h3>
          <Table countries={tableData} />
          <h3
            className={
              darkmode === true ? "darkapp__graphTitle" : "app__graphTitle"
            }
          >
            Worldwide new cases
          </h3>
          <LineGraph className="app__graph" casesType={casesType} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;
