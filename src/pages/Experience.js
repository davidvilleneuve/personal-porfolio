import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
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
       Clerk - Couche Tard
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        Laval, QC
      </h4>
      <p>Warehouseman</p>
    </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
           Warehouseman - ATS Healthcare 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Laval, QC
          </h4>
          <p>Warehouseman</p>
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

          <p> Cable and Circuit Assembly</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Electromechanian - Capmatic
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Montreal, Qc
          </h4>
          <p>Developed the backend infrastructure for 3 projects.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Obtained in 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          High school Diploma
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
  
        <p> Computer Science</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer - Commission scolaire de la Seigneurie-des-Mille-Îles
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
           St-Eusatche, Qc
          </h4>
          <p>
            Helped the team launch 2 major features by working both in the front
            end and back end.
          </p>
        </VerticalTimelineElement> 
      </VerticalTimeline>
     
      
    </div>
  );
}

export default Experience;
