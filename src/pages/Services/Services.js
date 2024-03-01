import React from "react";
import "./Services.css";
import GlobalTitle from "../../components/GlobalTitle/GlobalTitle";
import {
  faDesktop,
  faHeadset,
  faMobileScreen,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLightbulb,
  faObjectGroup,
} from "@fortawesome/free-regular-svg-icons";
import GlobalCard from "../../components/GlobalCard/GlobalCard";

const Services = () => {
  return (
    <section className="Services" id="Services">
      <GlobalTitle title={"Services"} description={"What i offer"} />
      <div className="Services__container container">
        <GlobalCard
          head={"Web Development"}
          icon={faDesktop}
          info={
            "I can build a website by using HTML, CSS, JavaScript and REACT"
          }
          class2={"Services__card"}
        />

        <GlobalCard
          head={"Responsive Design"}
          icon={faMobileScreen}
          info={
            "your website well be responsive for all devices: Tablets ans Smart phones"
          }
          class2={"Services__card"}
        />

        <GlobalCard
          head={"Creative Design"}
          icon={faObjectGroup}
          info={
            "i can edit your current website by adding a new content to make it much better"
          }
          class2={"Services__card"}
        />

        <GlobalCard
          head={"Web ideas"}
          icon={faLightbulb}
          info={
            "i could turn your ideas into a real projects with high quality"
          }
          class2={"Services__card"}
        />

        <GlobalCard
          head={"Retouch"}
          icon={faWandMagicSparkles}
          info={
            "I can help you by redesign your current webiste to looks much better"
          }
          class2={"Services__card"}
        />

        <GlobalCard
          head={"Support"}
          icon={faHeadset}
          info={
            "Support is avaiable if you wanna make any changes for your website after dilvering it"
          }
          class2={"Services__card"}
        />
      </div>
    </section>
  );
};

export default Services;
