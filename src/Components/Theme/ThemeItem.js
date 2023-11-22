import React from "react";

const ThemeItem = (props) => {
  return (
    <img
      src={props.img}
      alt="theme"
      className="theme__img"
      onClick={() => {
        props.changeColor(props.color);
      }}
    />
  );
};

export default ThemeItem;
