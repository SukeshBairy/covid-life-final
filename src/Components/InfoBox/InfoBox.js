import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

export const InfoBox = ({
  title,
  cases,
  active,
  isRed,
  total,
  mode,
  ...props
}) => {
  return (
    <Card
      onClick={props.onClick}
      className={
        mode === true
          ? `darkinfoBox
             `
          : `infoBox
             `
      }
    >
      <CardContent>
        <Typography
          className={mode === true ? "darkinfoBox__title" : "infoBox__title"}
          color="textSecondary"
        >
          {title}
        </Typography>
        <h2
          className={
            mode === true
              ? `darkinfoBox__cases ${!isRed && "darkinfoBox__cases--green"}`
              : `infoBox__cases ${!isRed && "infoBox__cases--green"}`
          }
        >
          {cases}
        </h2>
        <Typography
          className={mode === true ? "darkinfoBox__total" : "infoBox__total"}
          color="textSecondary"
        >
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};
