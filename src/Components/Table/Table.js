import React from "react";
import "./Table.css";
import numeral from "numeral";
import { selectDarkmode, setDarkMode } from "../../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const Table = ({ countries }) => {
  const darkmode = useSelector(selectDarkmode);

  return (
    <div className={darkmode === true ? "darktable" : "table"}>
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
};
