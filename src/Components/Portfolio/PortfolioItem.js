import React from "react";

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
        <a href={props.url} target="_blank" rel="noreferrer" title="web-link">
        <h3 className="portfolio__title">{props.title}</h3>
        </a>
      </div>
    </div>
  );
};

export default PortfolioItem;
