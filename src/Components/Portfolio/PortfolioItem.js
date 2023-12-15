import React from "react";
import Web from "../assets/web.png";
import GitHub from "../assets/github.png";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio__item">
      <img src={props.img} alt="" className="portfolio__img" />

      <div className="portfolio__tech">
        {props.technologies.map((technology, index) => (
          <span key={index} className="portfolio__techno">
            {technology}
          </span>
        ))}
      </div>

      <div className="portfolio__hover">
        <h3 className="portfolio__title">{props.title}</h3>
        <div className="portfolio__links">
          <a href={props.url} target="_blank" rel="noreferrer" title="website">
            <img src={Web} alt="Visit web" className="web__img" />
          </a>
          <a
            href={props.gitHub}
            target="_blank"
            rel="noreferrer"
            title="github"
          >
            <img src={GitHub} alt="Visit web" className="web__img" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
