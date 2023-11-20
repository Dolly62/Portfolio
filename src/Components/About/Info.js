import React from "react";
import { personalInfo } from "../Data/data";

const Info = () => {
  return (
    <>
      {personalInfo.map((info) => (
          <li className="info__item" key={info.index}>
            <span className="info__title">{info.title}</span>
            <span className="info__description">{info.description}</span>
          </li>
      ))}
    </>
  );
};

export default Info;
