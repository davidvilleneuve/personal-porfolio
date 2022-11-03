import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";
import { useTranslation } from "react-i18next";

function Experience() {
  const { t, i18n } = useTranslation();

  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2016 - 2017"
      iconStyle={{ background: "#e9d35b", color: "#fff" }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
       {t("Clerk")} - Couche Tard
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Laval, QC
      </h4>
      
    </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          {t("Warehouseman")} - ATS Healthcare 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Laval, QC
          </h4>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          École des métiers de l'aérospatiale de Montréal
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            DEP
          </h4>

          <p> {t("Cable and Circuit Assembly")}</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          {t("Electromechanian")} - Capmatic
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montreal, Qc
          </h4>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Obtained in 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          {t("High school Diploma")}
          </h3>

        </VerticalTimelineElement>

        
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2020 - 2022"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
        Lasalle College
        </h3>
  
        <h4 className="vertical-timeline-element-subtitle">
          AEC
        </h4>
  
        <p>  {t("Computer Science")}</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          {t("Web Developer")} - Commission scolaire de la Seigneurie-des-Mille-Îles
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           St-Eusatche, Qc
          </h4>
          <p>
          {t("Helped the team launch 3 major features by working both in the front end and back end.")}
          </p>
        </VerticalTimelineElement> 
      </VerticalTimeline>
     
      
    </div>
  );
}

export default Experience;
