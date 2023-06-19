import React from "react";
export default function WeatherIcon(props) {
  let iconCode = `./images/${props.code}.png`;
  return (
    <>
      <img src={iconCode} alt={props.alt} />
    </>
  );
}
