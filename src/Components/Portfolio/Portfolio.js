import React from "react";
import { portfolio } from "../Data/data";
import PortfolioItem from "./PortfolioItem";
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio__container container grid">
        {portfolio.map((item) => (
          <PortfolioItem
            key={item.key}
            title={item.title}
            url={item.url}
            img={item.img}
            technologies={item.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
