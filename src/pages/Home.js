import React, { useTransition } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Projects from "./Projects";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Home() {
 
  const { t, i18n } = useTranslation();


  return (
    <div className="home">
      <div className="about">
        <h2> {t("Hi, My Name is David")}</h2>
        <div className="prompt">
          <p>{t("A software developer with a passion for learning and creating.")}</p>
          <a href="https://www.linkedin.com/in/david-villeneuve-3b14a2235/"><LinkedInIcon /></a>
          <EmailIcon />
          <a href="https://github.com/davidvilleneuve"><GithubIcon/></a>
        </div>
      </div>
      <div className="skills" id="skill">
        <h1>{t("Skills")}</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, VueJS, HTML, CSS, CMS, NPM,
              BootStrap, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Laravel, ASP.NET, .NET Core, ExpressJS, Django, Flask, Symfony
             
            </span>
          </li>
          <li className="item">
            <h2>{t("Programming Languages")}</h2>
            <span>JavaScript, PHP, Java, Python, C#, C, C++, Golang, Swift</span>
          </li>
          <li className="item">
          <h2>{t("Database")}</h2>
          <span>
          
          MS SQL, MySQL, Postgresql, Firebase, Oracle, SQL lite, MS Access
          </span>
        </li>
        <li className="item">
        <h2>DevOps</h2>
        <span>
          Git, GitHub, BitBucket, Postman, Scrum, Jira, Vagrant, Selenium 
        </span>
      </li>
        </ol>
      </div>
   
 
      
      
     
    </div>
  );
}

export default Home;
