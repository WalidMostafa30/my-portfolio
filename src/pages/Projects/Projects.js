import React, { useState } from "react";
import "./Projects.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { projectsData } from "../../data/Data";

const Projects = () => {
  const [projectToMap, setProjectToMap] = useState(projectsData);

  const [categoryNum, setCategoryNum] = useState(0);

  const ArrayCategory = [
    "All",
    ...new Set(projectsData.map((i) => i.category)),
  ];

  const filterProject = (cat, index) => {
    if (cat === "All") {
      setProjectToMap(projectsData);
    } else {
      const productFilter = projectsData.filter((i) => i.category === cat);
      setProjectToMap(productFilter);
    }
    setCategoryNum(index);
  };

  return (
    <section className="Projects" id="Projects">
      <GlobalTitle title={"My Projects"} description={"Most Recent Work"} />
      <div className="Projects__container container">
        <div className="Projects__categorys">
          {ArrayCategory.map((e, index) => {
            return (
              <span
                key={index}
                className={
                  categoryNum === index
                    ? "Projects__cate active"
                    : "Projects__cate"
                }
                onClick={() => filterProject(e, index)}
              >
                {e}
              </span>
            );
          })}
        </div>
        <div className="Projects__cards">
          {projectToMap.map((pro, index) => {
            return (
              <div key={index} className="Projects__card">
                <img src={pro.img} alt="img" />
                <h3>{pro.title}</h3>
                <div className="Projects__card-btns">
                  <a href={pro.github} className="my-link-btn">
                    GitHub
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                  <a href={pro.demo} className="my-link-btn">
                    Demo
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
