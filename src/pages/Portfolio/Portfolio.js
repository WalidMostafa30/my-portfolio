import React, { useState } from "react";
import "./Portfolio.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import { PortfolioData } from "../../data/Data";
import Project from "../../components/Project/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SiwperSlideBtn from "../../components/SiwperSlideBtn/SiwperSlideBtn";

const Portfolio = () => {
  const [projectToMap, setProjectToMap] = useState(PortfolioData);

  const [categoryNum, setCategoryNum] = useState(0);

  const ArrayCategory = [
    "All",
    ...new Set(PortfolioData.map((i) => i.category)),
  ];

  const filterProject = (cat, index) => {
    if (cat === "All") {
      setProjectToMap(PortfolioData);
    } else {
      const productFilter = PortfolioData.filter((i) => i.category === cat);
      setProjectToMap(productFilter);
    }
    setCategoryNum(index);
  };

  return (
    <section className="Portfolio" id="Portfolio">
      <GlobalTitle title={"My Portfolio"} description={"Most Recent Work"} />
      <div className="Portfolio__container container">
        <div className="Portfolio__categorys">
          {ArrayCategory.map((e, index) => {
            return (
              <span
                key={index}
                className={
                  categoryNum === index
                    ? "Portfolio__cate active"
                    : "Portfolio__cate"
                }
                onClick={() => filterProject(e, index)}
              >
                {e}
              </span>
            );
          })}
        </div>
        <Swiper
          className="Swiper"
          grabCursor={true}
          loop={true}
          spaceBetween={100}
          slidesPerView={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            992: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SiwperSlideBtn />
          {projectToMap.map((pro, index) => {
            return (
              <SwiperSlide key={index}>
                <Project pro={pro} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
